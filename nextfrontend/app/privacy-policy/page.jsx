
export default function PrivacyPolicy() {
  const config = {
    blogName: 'detroitblogger',
    ownerName: 'Detroit Ash ', // Replace with your name
    aiToolName: '[Grok , Chatgpt , CopyAi , etc]', // Replace with your AI tool name
    aiToolPrivacyLink: '[link]', // Replace with AI tool privacy policy link
  };

  return (
    <>
      <div className="font-sans mt-20 mx-10 my-6 leading-relaxed md:mx-16 lg:mx-24 ">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Privacy Policy for {config.blogName}</h1>
        <p className="text-gray-700 mb-6"><strong>Effective Date:</strong> May 12, 2025</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to {config.blogName}, operated by {config.ownerName}. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">2. Information We Collect</h2>
        <p className="text-gray-700 mb-2">We collect:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Personal Information:</strong> Names and email addresses when you subscribe to our newsletter or submit comments.</li>
          <li><strong>Automatically Collected Data:</strong> IP addresses, browser types, and device information via analytics tools.</li>
          <li><strong>Cookies:</strong> Used for analytics and to enhance your experience.</li>
        </ul>
        <p className="text-gray-700 mb-4">Some of our blog content is generated using AI tools, which do not use or store your personal data.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-2">We use your information to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Send newsletters and updates (with your consent).</li>
          <li>Analyze website traffic to improve our blog.</li>
          <li>Provide a personalized browsing experience.</li>
        </ul>
        <p className="text-gray-700 mb-4">Our AI tools are used solely to generate blog content and do not process user data.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 mb-4">We use cookies for analytics. You can control cookies through your browser.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">5. Sharing Your Information</h2>
        <p className="text-gray-700 mb-2">We may share your data with:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Third-party services like Google Analytics for traffic analysis.</li>
          <li>Email marketing platforms for newsletters.</li>
          <li>Our AI content generation tool, {config.aiToolName}. See their privacy policy at <a className="text-blue-600 hover:underline" href={config.aiToolPrivacyLink}>{config.aiToolPrivacyLink}</a>.</li>
        </ul>
        <p className="text-gray-700 mb-4">We do not sell your personal information.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">6. Data Security</h2>
        <p className="text-gray-700 mb-4">We use encryption to protect your data, but no online system is 100% secure.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">7. Your Rights</h2>
        <p className="text-gray-700 mb-2">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Access, correct, or delete your personal data.</li>
          <li>Opt out of marketing communications.</li>
        </ul>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">8. Data Retention</h2>
        <p className="text-gray-700 mb-4">We keep your data only as long as needed for the purposes in this policy.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">9. International Data Transfers</h2>
        <p className="text-gray-700 mb-4">Your data may be processed in countries with different privacy laws.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mt-6 mb-3">10. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">We may update this policy and will notify you via our blog.</p>

      </div>
    </>
  );
}