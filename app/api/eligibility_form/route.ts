import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { encryptData, decryptData } from '@/utils/encryption';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
 
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions); // Get the session using the authOptions defined in the auth route
  console.log('Session for eligibility_screening (POST):', session);
 
  // Use 'as any' to access custom properties safely
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
 
  const body = await req.json();
  console.log('Received eligibility form data for eligibility_screening (POST):', body);
 
  try {
    const potentialParticipantId = parseInt(body.potential_participant_id);
 
    // Update data in potential_participants table
    await prisma.potential_participants.update({
      where: { id: potentialParticipantId },
      data: {
        eligibility_criteria: encryptData(String((body.eligibility_criteria)?.toLowerCase() === 'yes')),
        first_name: encryptData(body.first_name),
        last_name: encryptData(body.last_name),
        phone_number: encryptData(body.phone_number),
        email: encryptData(body.email),
        county: encryptData(body.county),
        zip: encryptData(body.zip) || null,
        referrer_first_name: encryptData(body.referrer_first_name),
        referrer_last_name: encryptData(body.referrer_last_name),
        referrer_phone: encryptData(body.referrer_phone),
        referrer_email: encryptData(body.referrer_email),
        referral_source: encryptData(body.referral_source),
        referral_business_name: encryptData(body.referral_business_name) || null,
        client_of_mdrrs: encryptData(String((body.client_of_mdrrs)?.toLowerCase() === 'yes')),
        staff_submit_referral_to_mdrs: encryptData(String((body.staff_submit_referral_to_mdrrs)?.toLowerCase() === 'yes')),
        release_info_consent_mdrs: encryptData(String((body.release_info_consent_mdrrs)?.toLowerCase() === 'yes')),
        long_covid_syndrome: encryptData(String((body.long_covid_syndrome)?.toLowerCase() === 'yes')),
        is_ms_resident: encryptData(String((body.is_ms_resident)?.toLowerCase() === 'yes')),
        is_age_16_to_70: encryptData(String((body.is_age_16_to_70)?.toLowerCase() === 'yes')),
        desire_to_continue_work: encryptData(String(body.desire_to_continue_work)),
        wants_to_work_if_unemployed: encryptData(String((body.wants_to_work_if_unemployed)?.toLowerCase() === 'yes')),
        not_involving_other_off: encryptData(String((body.not_involving_other_off)?.toLowerCase() === 'yes')),
        submitted_at: body.submitted_at ? new Date(body.submitted_at) : new Date(),
      },
    });
 
    // Save data to the eligibility_screening table
    const eligibilityDataToEncrypt = {
      chp_partner_business: body['chp_partner_business'],
      contact_method: body['contact_method'],
      history_of_contact_attempts: body['history_of_contact_attempts'],
      mode_of_learning_about_chp: body['mode_of_learning_about_chp'],
      source_of_learning_about_chp: body['source_of_learning_about_chp'],
      individual_interest_in_chp: body['individual_interest_in_chp'],
      disability_accompanied_by_long_covid: body['disability_accompanied_by_long_covid'],
      long_covid_syndrome: body['long_covid_syndrome'],
      is_ms_resident: body['is_ms_resident'],
      is_age_16_to_70: body['is_age_16_to_70'],
      is_currently_employed: body['is_currently_employed'],
      desire_to_continue_work: body['desire_to_continue_work'],
      paid_subminimum_wage: body['paid_subminimum_wage'],
      working_leave_status: body['working_leave_status'],
      risk_of_losing_job: body['risk_of_losing_job'],
      how_you_hope_to_benefit_from_chp: body['how_you_hope_to_benefit_from_chp'],
      interest_in_returning_to_work: body['interest_in_returning_to_work'],
      not_involving_other_off: body['not_involving_other_off'],
      initial_contact_results: body['initial_contact_results'],
      reason_for_not_eligible: body['reason_for_not_eligible'],
      statement_of_informed_consent: body['statement_of_informed_consent'],
      release_of_information_roi: body['release_of_information_roi'],
      individual_provided_medical_information: body['individual_provided_medical_information'],
      status_of_receiving_medical_information: body['status_of_receiving_medical_information'],
      individual_home_address: body['individual_home_address'],
      individual_birthdate: body['individual_birthdate'],
      service_region: body['service_region'],
      vocational_counselor_assigned_first_name: body['vocational_counselor_assigned_first_name'],
      vocational_counselor_assigned_last_name: body['vocational_counselor_assigned_last_name'],
      vocational_counselors_caseload_or_waitlist: body['vocational_counselors_caseload_or_waitlist'],
      current_client_of_mdrs_or_no: body['current_client_of_mdrs_or_no'],
      submit_an_mdrs_referral: body['submit_an_mdrs_referral'],
      sharing_information_with_mdrs: body['sharing_information_with_mdrs'],
    };
    // Encrypt the eligibility data
 
    const encryptedEligibilityData = Object.fromEntries(
      Object.entries(eligibilityDataToEncrypt).map(([key, value]) => [key, value ? encryptData(value) : null])
    ); // Encrypt each field except for boolean values
 
    const eligibilityRecord = await prisma.eligibility_screening.create({ // Create a new record in the eligibility_screening table
      data: {
        potential_participant_id: potentialParticipantId,
        user_id: (session.user as any).id,
        eligibility_for_participation: body['eligibility_for_participation'],
        confirmation_of_eligibility_questions:
          body['confirmation_of_eligibility_questions'] === 'true' ||
          body['confirmation_of_eligibility_questions'] === true
            ? true
            : false,
        ...encryptedEligibilityData,
      },
    });
 
    return NextResponse.json({ message: 'Eligibility data saved to eligibility_screening', data: eligibilityRecord }, { status: 201 });
 
  } catch (error: any) {
    console.error('Error processing eligibility form for eligibility_screening:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
 
export async function GET(req: NextRequest) {
  console.log('GET request for eligibility data from eligibility_screening received');
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');
 
  try {
    if (id) {
      const eligibilityData = await prisma.eligibility_screening.findUnique({
        where: { id: parseInt(id) },
        include: { potential_participant: true, user: true },
      });
      if (eligibilityData) {
        const decryptedData = {
          ...Object.fromEntries(
            Object.entries(eligibilityData).map(([key, value]) => [key, typeof value === 'string' && key !== 'potential_participants' && key !== 'user' ? decryptData(value) : value])
          ),
          potential_participants: eligibilityData.potential_participant ? Object.fromEntries(
            Object.entries(eligibilityData.potential_participant).map(([key, value]) => [key, typeof value === 'string' ? decryptData(value) : value])
          ) : null,
          user: eligibilityData.user ? Object.fromEntries(
            Object.entries(eligibilityData.user).map(([key, value]) => [key, typeof value === 'string' ? decryptData(value) : value])
          ) : null,
        };
        return NextResponse.json({ data: decryptedData }, { status: 200 });
      }
      return NextResponse.json({ message: 'Data not found' }, { status: 404 });
    } else {
      const allEligibilityData = await prisma.eligibility_screening.findMany({
        include: { potential_participant: true, user: true },
      });
      const decryptedEligibilityData = allEligibilityData.map((eligibility) => ({
        ...Object.fromEntries(
          Object.entries(eligibility).map(([key, value]) => [key, typeof value === 'string' && key !== 'potential_participants' && key !== 'user' ? decryptData(value) : value])
        ),
        potential_participants: eligibility.potential_participant ? Object.fromEntries(
          Object.entries(eligibility.potential_participant).map(([key, value]) => [key, typeof value === 'string' ? decryptData(value) : value])
        ) : null,
        user: eligibility.user ? Object.fromEntries(
          Object.entries(eligibility.user).map(([key, value]) => [key, typeof value === 'string' ? decryptData(value) : value])
        ) : null,
      }));
      return NextResponse.json({ data: decryptedEligibilityData }, { status: 200 });
    }
  } catch (error: any) {
    console.error('Error fetching and decrypting eligibility data from eligibility_screening:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
 