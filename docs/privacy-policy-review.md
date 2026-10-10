# Privacy Policy Verification Checklist

The public policy is a draft based on the repository and details supplied by the operator. Confirm these operational facts before treating it as final:

- Confirm whether the WhatsApp Cloud API and n8n workflow are live and describe the exact workflow actions and business purposes.
- Identify which n8n nodes, credentials, or databases retain message payloads, contact details, and execution data; confirm the configured retention and backup periods.
- Confirm Vercel's applicable request-log retention and whether deployment-level analytics or logging features are enabled.
- Confirm the actual security controls for the Google Cloud VM, n8n, Meta, and business email, including account access, multifactor authentication, encryption, and backups. Update the public security description only with verified controls.
- Test the manual deletion-request procedure: find the relevant email and WhatsApp/workflow records, delete or anonymize records under business control, and identify provider-side deletion steps and any retention exceptions.
- Confirm whether the email address used for privacy requests is monitored and can reliably route deletion requests to the operator.