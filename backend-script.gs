/**
 * ZEVORA Form Handler
 * ... (same content)
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add row to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.message
    ]);
    
    // Send Email Notification
    const emailBody = `
      New Enquiry for ZEVORA
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      Time: ${new Date().toLocaleString()}
    `;
    
    MailApp.sendEmail({
      to: "design.zevoratech@gmail.com",
      subject: "New ZEVORA Web Lead: " + data.name,
      body: emailBody
    });

    // Auto-Reply to Client
    if (data.email) {
      const autoReplyBody = `
        Hi ${data.name},
        
        Thank you for contacting ZEVORA. We have received your project details and will review them shortly.
        
        Our team will get back to you within 24 hours.
        
        Best,
        The ZEVORA Team
      `;
      
      MailApp.sendEmail({
        to: data.email,
        subject: "We've received your message - ZEVORA",
        body: autoReplyBody
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
}
