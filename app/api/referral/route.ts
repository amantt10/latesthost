import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { encryptData,decryptData } from '@/utils/encryption'; // Make sure the path is correct

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Received data in API :', body); // Debugging line

  try {
    const participant = await prisma.potential_participants.create({
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
        staff_submit_referral_to_mdrrs: encryptData(String((body.staff_submit_referral_to_mdrrs)?.toLowerCase() === 'yes')),
        release_info_consent_mdrrs: encryptData(String((body.release_info_consent_mdrrs)?.toLowerCase() === 'yes')),
        long_covid_syndrome: encryptData(String((body.long_covid_syndrome)?.toLowerCase() === 'yes')),
        is_ms_resident: encryptData(String((body.is_ms_resident)?.toLowerCase() === 'yes')),
        is_age_16_to_70: encryptData(String((body.is_age_16_to_70)?.toLowerCase() === 'yes')),
        desire_to_continue_work: encryptData(String(body.desire_to_continue_work)),
        wants_to_work_if_unemployed: encryptData(String((body.wants_to_work_if_unemployed)?.toLowerCase() === 'yes')),
        not_involving_other_off: encryptData(String((body.not_involving_other_off)?.toLowerCase() === 'yes')),
        submitted_at: new Date(),
      },
    });

    return NextResponse.json(
      { message: 'Referral submitted successfully', data: participant },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating participant:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  console.log('GET request received'); // Debugging line
  try {
    const participants = await prisma.potential_participants.findMany();

    const decryptedParticipants = participants.map((participant) => {
      // Helper to safely decrypt and handle nulls
      const safeDecrypt = (val: string | null) => (val ? decryptData(val) : null);

      return {
        ...participant,
        eligibility_criteria: safeDecrypt(participant.eligibility_criteria) === 'true',
        first_name: safeDecrypt(participant.first_name),
        last_name: safeDecrypt(participant.last_name),
        phone_number: safeDecrypt(participant.phone_number),
        email: safeDecrypt(participant.email),
        county: safeDecrypt(participant.county),
        zip: safeDecrypt(participant.zip),
        referrer_first_name: safeDecrypt(participant.referrer_first_name),
        referrer_last_name: safeDecrypt(participant.referrer_last_name),
        referrer_phone: safeDecrypt(participant.referrer_phone),
        referrer_email: safeDecrypt(participant.referrer_email),
        referral_source: safeDecrypt(participant.referral_source),
        referral_business_name: safeDecrypt(participant.referral_business_name),
        client_of_mdrrs: safeDecrypt(participant.client_of_mdrrs) === 'true',
        staff_submit_referral_to_mdrrs: safeDecrypt(participant.staff_submit_referral_to_mdrrs) === 'true',
        release_info_consent_mdrrs: safeDecrypt(participant.release_info_consent_mdrrs) === 'true',
        long_covid_syndrome: safeDecrypt(participant.long_covid_syndrome) === 'true',
        is_ms_resident: safeDecrypt(participant.is_ms_resident) === 'true',
        is_age_16_to_70: safeDecrypt(participant.is_age_16_to_70) === 'true',
        desire_to_continue_work: safeDecrypt(participant.desire_to_continue_work),
        wants_to_work_if_unemployed: safeDecrypt(participant.wants_to_work_if_unemployed) === 'true',
        not_involving_other_off: safeDecrypt(participant.not_involving_other_off) === 'true',
        submitted_at: participant.submitted_at
      };
    });

    return NextResponse.json({ data: decryptedParticipants }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching and decrypting participants:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}