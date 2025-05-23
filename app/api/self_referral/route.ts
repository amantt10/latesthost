import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { encryptData, decryptData } from '@/utils/encryption'; // Make sure the path is correct

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log('Received data in API:', body); // Debugging line
  console.log('About to insert into database');

  try {
    // Insert into potential_participants, using the fields provided by the self-referral form
    const participant = await prisma.potential_participants.create({
      data: {
        first_name: encryptData(body.first_name) || null,
        last_name: encryptData(body.last_name) || null,
        phone_number: encryptData(body.phone_number) || null,
        email: encryptData(body.email) || null,
        county: encryptData(body.county) || null,
        zip: encryptData(body.zip) || null,
        long_covid_syndrome: encryptData(String(body.long_covid_syndrome === 'yes')) || null,
        is_ms_resident: encryptData(String(body.is_ms_resident === 'yes')) || null,
        is_age_16_to_70: encryptData(String(body.is_age_16_to_70 === 'yes')) || null,
        desire_to_continue_work: encryptData(body.desire_to_continue_work) || null,
        wants_to_work_if_unemployed: encryptData(String(body.wants_to_work_if_unemployed === 'yes')) || null,
        not_involving_other_off: encryptData(String(body.not_involving_other_off === 'yes')) || null,
        client_of_mdrrs: encryptData(String(body.client_of_mdrrs)) || null,
        staff_submit_referral_to_mdrrs: encryptData(String(body.staff_submit_referral_to_mdrrs)) || null,
        release_info_consent_mdrrs: encryptData(String(body.release_info_consent_mdrrs)) || null,
        submitted_at: new Date(),
      },
    });

    return NextResponse.json(
      { message: 'Self-referral submitted successfully', data: participant },
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
  try {
    const participants = await prisma.potential_participants.findMany();

    // Decrypt the relevant fields for each participant
    const decryptedParticipants = participants.map((participant) => ({
      ...participant,
      first_name: decryptData(participant.first_name),
      last_name: decryptData(participant.last_name),
      phone_number: decryptData(participant.phone_number),
      email: decryptData(participant.email),
      county: decryptData(participant.county),
      zip: decryptData(participant.zip),
      long_covid_syndrome: decryptData(participant.long_covid_syndrome) === 'true',
      is_ms_resident: decryptData(participant.is_ms_resident) === 'true',
      is_age_16_to_70: decryptData(participant.is_age_16_to_70) === 'true',
      desire_to_continue_work: decryptData(participant.desire_to_continue_work),
      wants_to_work_if_unemployed: decryptData(participant.wants_to_work_if_unemployed) === 'true',
      not_involving_other_off: decryptData(participant.not_involving_other_off) === 'true',
      client_of_mdrrs: decryptData(participant.client_of_mdrrs) === 'true',
      staff_submit_referral_to_mdrrs: decryptData(participant.staff_submit_referral_to_mdrrs) === 'true',
      release_info_consent_mdrrs: decryptData(participant.release_info_consent_mdrrs) === 'true',
    }));

    return NextResponse.json({ data: decryptedParticipants }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching and decrypting participants:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}