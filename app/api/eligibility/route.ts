import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { encryptData, decryptData } from '@/utils/encryption';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Received data in Eligibility API:', body);

  try {
    const participant = await prisma.potential_participants.create({
      data: {
        long_covid_syndrome: encryptData(String(String(body.long_covid_syndrome)?.toLowerCase() === 'yes')),
        is_ms_resident: encryptData(String(String(body.is_ms_resident)?.toLowerCase() === 'yes')),
        is_age_16_to_70: encryptData(String(String(body.is_age_16_to_70)?.toLowerCase() === 'yes')),
        not_involving_other_off: encryptData(String(String(body.not_involving_other_off)?.toLowerCase() === 'yes')),
        client_of_mdrrs: encryptData(String(String(body.client_of_mdrrs)?.toLowerCase() === 'yes')),
        staff_submit_referral_to_mdrrs: encryptData(String(String(body.staff_submit_referral_to_mdrrs)?.toLowerCase() === 'yes')),
        release_info_consent_mdrrs: encryptData(String(body.release_info_consent_mdrrs)),
        desire_to_continue_work: encryptData(String(body.desire_to_continue_work)),
        wants_to_work_if_unemployed: encryptData(String(body.wants_to_work_if_unemployed)),
        first_name: encryptData(body.first_name),
        last_name: encryptData(body.last_name),
        phone_number: encryptData(body.phone_number),
        email: encryptData(body.email),
        county: encryptData(body.county),
        zip: encryptData(body.zip),
        submitted_at: new Date(),
      },
    });

    return NextResponse.json(
      { message: 'Eligibility form submitted successfully', data: participant },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating eligibility participant:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const participants = await prisma.potential_participants.findMany();

    const safeDecrypt = (val: string | null) => (val ? decryptData(val) : null);

    const decryptedParticipants = participants.map((participant) => ({
      ...participant,
      long_covid_syndrome: safeDecrypt(participant.long_covid_syndrome) === 'true',
      is_ms_resident: safeDecrypt(participant.is_ms_resident) === 'true',
      is_age_16_to_70: safeDecrypt(participant.is_age_16_to_70) === 'true',
      not_involving_other_off: safeDecrypt(participant.not_involving_other_off) === 'true',
      client_of_mdrrs: safeDecrypt(participant.client_of_mdrrs) === 'true',
      staff_submit_referral_to_mdrrs: safeDecrypt(participant.staff_submit_referral_to_mdrrs) === 'true',
      release_info_consent_mdrrs: safeDecrypt(participant.release_info_consent_mdrrs),
      desire_to_continue_work: safeDecrypt(participant.desire_to_continue_work),
      wants_to_work_if_unemployed: safeDecrypt(participant.wants_to_work_if_unemployed),
      first_name: safeDecrypt(participant.first_name),
      last_name: safeDecrypt(participant.last_name),
      phone_number: safeDecrypt(participant.phone_number),
      email: safeDecrypt(participant.email),
      county: safeDecrypt(participant.county),
      zip: safeDecrypt(participant.zip),
      submitted_at: participant.submitted_at,
    }));

    return NextResponse.json({ data: decryptedParticipants }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching and decrypting eligibility participants:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}