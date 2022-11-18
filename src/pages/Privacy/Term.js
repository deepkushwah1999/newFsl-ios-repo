




import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Text, ScrollView,
  Image, TouchableOpacity
} from 'react-native';
import { userActions } from '../../_actions';
import { SafeAreaView } from 'react-native-safe-area-context';


class Term extends Component {
  constructor(props) {
    super(props)

  }




  render() {

    let { users, theme, leng } = this.props;


    return (
      <SafeAreaView>
        <View>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: 60, justifyContent: 'center', paddingLeft: 20 }}>
            <Text style={{ color: "white", fontWeight: '400', textTransform: 'uppercase', fontSize: 16, alignSelf: 'center', letterSpacing: 1, }}>{leng.theme == "en" ? "TERM OF USE" : "टर्म ऑफ़ यूज़ "}</Text>
          </View>
          <ScrollView style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }} showsVerticalScrollIndicator={false}>
            <View style={{ margin: 10, }}>
              <View>
                <Text style={{ fontSize: 15 }}>Welcome to Sportify Technologies LLP ("SPORTIFY" or "Sportify" or "Company" or "We").

                  We're a software development firm based in New Delhi, Delhi (India).</Text>
              </View>
              <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold', marginTop: 10 }}>DEFINITIONS</Text>

              <View>
                <Text>
                  (i) "Act": It means and include any of the following (as applicable)

                  (a) 'The Information and Technology Act, 2000';
                  (b) 'The Information and Technology (Amendment) Act, 2008';
                  (c) 'The Consumer Protection Act, 2019'.
                  (ii) "Rule": It means and include any of the following (as applicable):

                  (a) The Information Technology (Reasonable Security Practices And Procedures And Sensitive Personal Data or Information) Rules, 2011; or
                  (b) The Consumer Protection (E-Commerce) Rules, 2020;
                  (iii) "Sportify": It shall mean and include Sportify Technologies LLP, its partners, employees, affiliates, key managerial personnel etc.

                  (iv) "Company": It shall mean and include Sportify Technologies LLP, its partners, employees, affiliates, key managerial personnel etc.

                  (v) "We": It shall mean and include Sportify Technologies LLP, its partners, employees, affiliates, key managerial personnel etc.

                  (vi) "Website(s)/Mobile Application(s)": It shall mean and include all websites and mobile applications available for the User(s) owned and managed (directly or indirectly) by Sportify Technologies LLP

                  (vii) "Service(s)": It means and includes the various services offered by Sportify to all its User(s) through the Website(s)/Mobile Application(s) of SPORTIFY.

                  (viii) "User(s)": It shall mean and include all potential users, subscribers, consumers, registered or unregistered, natural or legal persons, who access, subscribe or register to our Website(s)/Mobile Application(s) of SPORTIFY.

                  (ix) "Materials": It means and includes all information, materials, functions, texts, logos, designs, graphics, images, sounds, software, documents, products and services provided by SPORTIFY on our Website(s)/Mobile Application(s) of SPORTIFY.

                  (x) "Public Forum": It means and include a chat portal for the users etc. to post or upload comments, feedback, data, links, videos, audios, graphics, images, messages and other material available in certain sections or pages of the Website(s)/Mobile Application(s) of SPORTIFY.

                  (xi) "User(s) Content": It means and includes all or any comments, feedback, data, links, videos, audios, graphics, images, messages and any other materials uploaded by the Users of the said Website(s)/Mobile Application(s) of SPORTIFY

                  (xii) "Terms of Use": It shall mean and include all terms and conditions incorporated into this agreement including any updates, modification done from time to time, and published in our Website(s)/Mobile Application(s) of SPORTIFY.

                  (xiii) "Privacy Policy": It shall mean and include all terms and conditions incorporated into a document published and available in our Website(s)/Mobile Application(s) of SPORTIFY under the heading called 'Privacy Policy'.

                  (xiv) "User(s) Agreement": It refers to the meaning and includes both documents i.e. the Terms of Use and the Privacy Policy, as published in our Website(s)/Mobile Application(s) of SPORTIFY.

                  INTRODUCTION

                  This user agreement ("Terms of Use") is an electronic record in terms of Information Technology Act, 2000 ("Act") and rules thereunder as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology (Amendment) Act, 2008. This Terms of Use is generated by a computer system and does not require any physical or digital signatures.

                  This Terms of Use govern your use of our Website(s)/Mobile Application(s) of SPORTIFY, Materials, Our Content and the services offered by SPORTIFY upon the said Website(s)/Mobile Application(s) ("Service(s)").

                  For the purpose of this Terms of Use, wherever the context so require, User(s) shall mean any natural or legal person who has agreed to become a member of our Website(s)/Mobile Application(s) of SPORTIFY by voluntarily registering on it as a registered user or otherwise browses/visits our Website(s)/Mobile Application(s) of SPORTIFY without taking registration or subscription of any kind as available during the relevant time. Your access or use of the said Website(s)/Mobile Application(s) is subject to the terms and conditions of use as set out herein under this Terms of Use and the Privacy Policy made available at our Website(s)/Mobile Application(s) of SPORTIFY.

                  Please note that by accessing or using the said Website(s)/Mobile Application(s), the User(s) voluntarily agree to be bound by this Terms of Use and, this Terms of Use is a legally binding agreement between the User(s) and Sportify.

                  USER(S) REGISTRATION

                  User(s) may use our Website(s)/Mobile Application(s) of SPORTIFY without registration. However, in order to personalize your experience with SPORTIFY, User(s) may create an account or you can login through your Google account, Facebook Account or Mobile Number, as per the functionality made available on our Website(s)/Mobile Application(s) of SPORTIFY during the relevant time.

                  User(s) further undertake and agree to:

                  a) provide true, accurate, correct and complete information as prompted by the applicable registration form made available at our Website(s)/Mobile Application(s) of SPORTIFY;

                  b) maintain and update the true, accurate, correct and complete information provided by you during the registration process at our Website(s)/Mobile Application(s) of SPORTIFY.

                  You may be required to choose a password and username. You are solely responsible for maintaining the confidentiality of your password/user name and the created account.

                  If at any time, SPORTIFY believe that in case the account and password of any User(s) is being misused in any manner, or that the information provided by such User(s) during the registration process is not true, inaccurate or incomplete, then SPORTIFY reserves the right to cancel your account and block your access to all platforms of our Website(s)/Mobile Application(s) of SPORTIFY.

                  User(s) are entirely responsible for any and all activities that occur under their account. User(s) also agree to notify us regarding any prior use or any unauthorized use of their account or any breach of security. Further, We shall not be liable for any loss of User(s) that may incur as a result of someone else using its password or account or User(s) itself failure to comply with this section.

                  USE OF OUR WEBSITE(S)/MOBILE APPLICATION(S) OF SPORTIFY

                  Materials provided on our Website(s)/Mobile Application(s) of SPORTIFY, including but not limited to all information, materials, functions, texts, logos, designs, graphics, images, sounds, software, documents, products and services ("Materials"), and the selection, arrangement and display thereof, may be the copyrighted works of Sportify or its vendors or third party service providers. All Materials herein and all software are owned by Sportify/its partners and protected by worldwide copyright and other intellectual property laws as applicable. Except as stated herein, none of the Materials may be modified, copied, reproduced, distributed, republished, downloaded, displayed, sold, compiled, posted or transmitted in any form or by any means, including but not limited to, electronic, mechanical, photocopying, recording or other means, without the prior express written permission of Sportify.

                  We hereby grant all our User(s) the right to access and use our Website(s)/Mobile Application(s) of SPORTIFY only for their personal and non-commercial use. User(s) may not use it for commercial purposes or in any way that is unlawful, or harms us or any other person or entity, as determined in our sole discretion.

                  User(s) may post or share any links, images, texts and/or contents from our Website(s)/Mobile Application(s) of SPORTIFY to social platforms like Facebook, Twitter, Google+, Whatsapp, etc., with appropriate link-back to the original source.

                  Our Website(s)/Mobile Application(s) of SPORTIFY including the Materials are made available for public use in general and for non-commercial usage only. The intellectual property (if any) available in our Website(s)/Mobile Application(s) of SPORTIFY, including the Materials, are solely owned by SPORTIFY/its partners.

                  In respect of the contents available within our Website(s)/Mobile Application(s) of SPORTIFY, including the Materials, all User(s) have to:

                  (a) Keep intact all copyright and other proprietary notices;

                  (b) Make no modifications to, and do not rent, lease, loan, sell, distribute, copy or create any derivative works based upon the work of SPORTIFY or the Materials created/developed/ideated by SPORTIFY, in whole or in part;

                  (c) Not transfer any Materials or software or any part thereof to any other computer or mobile device;

                  (d) Restrain from any commercial or business use of SPORTIFY or any Materials including the software etc. as the same is expressly prohibited by Sportify; and

                  (e) Ensure that none of the all or any functionalities, features etc. available at our Website(s)/Mobile Application(s) of SPORTIFY are replicated or reproduced by our User(s) or by any third person at any other different website, mobile application or any other platform.

                  Except as expressly provided above, nothing contained herein shall be construed as conferring, by implication, estoppel or otherwise, any license or right in respect of any patent, trademark or copyright of Sportify upon any person.

                  User(s) acknowledge and agree that nothing in this Terms of Use shall have the effect of transferring the ownership of any copyrights, trademarks, service marks, trade names or any other proprietary rights available with our Website(s)/Mobile Application(s) of SPORTIFY, other Materials or any part thereof to them or any other third party.

                  PROHIBITED USE

                  As a condition of use of our Website(s)/Mobile Application(s) of SPORTIFY by the User(s), they will not use it for any purpose that is unlawful or prohibited by these Terms of Use or by any domestic or international laws, statutes, ordinances and regulations. It is clarified that the use of our Website(s)/Mobile Application(s) of SPORTIFY by the User(s) is the sole responsibility of the User(s) itself only.

                  You shall not display, upload, modify, publish, transmit, update or share any information into our Website(s)/Mobile Application(s) of SPORTIFY, that

                  a) belongs to another person and to which you do not have any right;

                  b) is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another;s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner;

                  c) involves the transmission of "junk mail", "chain letters", "unsolicited mass mailing", "spamming" or "unsolicited commercial advertisement";

                  d) harm minors in any way;

                  e) infringes any patent, trademark, copyright or other proprietary rights;

                  f) violates any law for the time being in force;

                  g) deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;

                  h) impersonate another person;

                  i) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of our resources/contents in general;

                  USE OF PUBLIC FORUM

                  Certain sections or pages of the Website(s)/Mobile Application(s) of SPORTIFY may contain a provision such as a chat portal for users etc. (hereinafter referred to as the "Public Forum") for the users to post or upload comments, feedback, data, links, videos, audios, graphics, images, messages and other material ("User Content"). Through the Public Forum, any User(s) can communicate with other users of the Website(s)/Mobile Application(s) of SPORTIFY.

                  User(s) are solely and entirely responsible regarding all their User Content that they upload, post, email, transmit or otherwise make available the same upon the Public Forum. User(s) fully understand and acknowledge that such User Content can be viewed by other users globally and therefore User(s) shall exercise due care to ensure that such User Content does not offend or abuse other users of our Website(s)/Mobile Application(s) of SPORTIFY.

                  SPORTIFY does not control the User Content posted on the Public Forum and, as such, does not guarantee the accuracy, integrity or quality of such User Content. User(s) understand that by using our Website(s)/Mobile Application(s) of SPORTIFY, they may be exposed to User Content that is offensive, indecent or objectionable.

                  Under no circumstances, SPORTIFY will be liable in any way for any User Content, including, but not limited to, for any errors or omissions in any User Content, or for any loss or damage of any kind incurred as a result of the use of any User Content posted, emailed, transmitted or otherwise made available on our Website(s)/Mobile Application(s) of SPORTIFY.

                  When our User(s) post or upload their User Content on our Website(s)/Mobile Application(s), they grant SPORTIFY (and its licensees, distributors, agents, representatives and other authorized persons) the irrevocable rights in perpetual, royalty-free, non-exclusive and a license to reproduce, prepare derivative works based upon such User Content, and to distribute, perform or display such User Content, in whole or in part, in any form, on any media or technology known or hereafter developed.

                  User Content posted by our User(s) shall be subject to the relevant laws and may be disabled, or/and may be subject to investigation under the appropriate laws. User(s) agree that SPORTIFY may disclose or preserve User Content if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to:

                  (a) comply with legal process;

                  (b) respond to claims that any User Content violates the rights of third-parties; or

                  (c) protect the rights, property, or personal safety of SPORTIFY and the public.

                  Furthermore, if any User(s) are found to be in non-compliance with the laws and regulations, these Terms of Use, or the Privacy Policy of our Website(s)/Mobile Application(s) of SPORTIFY, SPORTIFY may terminate his/her account/block the access and, also further reserve the right to remove any of such User Content that is non-compliant with our policies in general.

                  User(s) agree that SPORTIFY has no liability or responsibility for the storage or deletion of any User Content and reserves the right to change its general practices and limits at any time in its sole discretion, with or without notice to its User(s).

                  COPYRIGHT AND TRADEMARKS

                  Unless otherwise stated, copyright and all intellectual property rights in all Materials on our Website(s)/Mobile Application(s) of SPORTIFY [including but not limited to text, audio, video or graphical images, or technology, the look and feel of the website/mobile application, trademarks and logos appearing on our Website(s)/Mobile Application(s) of SPORTIFY] may be the property of SPORTIFY and may be owned and controlled by us or by other parties that have licensed their material to us. Materials on our Website(s)/Mobile Application(s) are solely for your personal, non-commercial use. Some content used on our Website(s)/Mobile Application(s) of SPORTIFY may be taken from public domain and displayed herein. User(s) are bound to respect the respective intellectual property rights that may subsist in such Materials made available on our Website(s)/Mobile Application(s). User(s) must not copy, reproduce, republish, upload, post, transmit or distribute the Materials in any way, including by e-mail or other electronic means and whether directly or indirectly and must not assist any other person to do so. Without the prior written consent of the owner, modification of the Materials, use of the Materials on any other web site or networked computer environment or use of the Materials for any purpose other than personal, non-commercial use is a violation of the copyrights, trademarks and other proprietary rights, and is strictly prohibited. Any use for which the User(s) receive any remuneration, whether in money or otherwise, is a commercial use for the purposes of this clause. User(s) agree not to use any framing techniques to enclose any trademark or logo or other proprietary information of SPORTIFY or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on our Website(s)/Mobile Application(s) of SPORTIFY, including without limitation, the size, colour, location or style of all proprietary marks. Any infringement shall be vigorously defended and pursued to the fullest extent as permitted by the appropriate laws.

                  We respect other people's intellectual property rights and if you believe that any content or material on our Website(s)/Mobile Application(s) of SPORTIFY infringes on your intellectual property rights, the User(s) or any other concerned person are requested to click upon contact us in order to know further details for necessary action.

                  LINKS

                  We may establish, on our Website(s)/Mobile Application(s) of SPORTIFY, a hypertext link(s) to a third party website from time to time. Such link(s) are provided for information and convenience for our User(s) and do not state or imply any sponsorship or endorsement of third party websites. SPORTIFY has no control over such third party websites and use of such third party websites or any offsite dealings with such third parties by User(s) is at their own risk and responsibility.

                  USE OF GOOGLE ANALYTICS

                  Our Website(s)/Mobile Application(s) of SPORTIFY use Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how User(s) use the website or mobile application. The information generated by the cookie about your use of the website/mobile application (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website or mobile application, compiling reports on website activity for website operators and providing other services relating to website activity and Internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf. By using this website/mobile application, User(s) consent to the processing of data about you by Google in the manner and for the purposes set out above.

                  ADVERTISING MATERIAL

                  Some part or portion of our Website(s)/Mobile Application(s) of SPORTIFY may contain advertising information or promotion material or other material submitted to us by third parties.

                  Responsibility for ensuring that the material submitted for inclusion on our Website(s)/Mobile Application(s) of SPORTIFY complies with applicable laws is exclusively on the party providing the information/material. User(s) correspondence or business dealings with, or participation in promotions of advertisers or including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between the User(s) and such advertiser. We will not be responsible or liable for any claim, error, omission, inaccuracy in advertising material or any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on our Website(s)/Mobile Application(s) of SPORTIFY. We reserve the right to omit, suspend or change the position of any advertising material submitted for insertion.

                  We do not guarantee or give any kind of assurance to all or any of the User(s) doing anything in furtherance to or relying upon such advertising materials of third party advertisers.

                  It is expressly clarified that any sponsored content of any goods/service/activity (expressly displayed at respective portions on our Website(s)/Mobile Application(s) of SPORTIFY) displayed are not solicited by SPORTIFY and it should not be deemed as a promotion made at the behest of SPORTIFY.

                  INTERNATIONAL USE

                  SPORTIFY is a company incorporated as per the laws applicable in India and it makes no representation that our Website(s)/Mobile Application(s) of SPORTIFY is appropriate or available in locations outside of India. Those who choose to access it from other locations do so at their own risk and are solely responsible for compliance with applicable laws.

                  DISCLAIMER AND LIMITATION OF LIABILITY

                  (a) By accessing and/or using our Website(s)/Mobile Application(s) of SPORTIFY and its service (hereinafter referred to as the "Service"), User(s) have read, understood and agree to be legally bound by the terms of this disclaimer. User(s) agree that your access to the Service is at your sole risk and at your free will.

                  (b) The Service and all material therein contained are distributed and transmitted on an "as is" and "as available" basis.

                  (c) We disclaim any and all express or implied representations, warranties and/or conditions of any kind, including but not limited to warranties of completeness, accuracy, reliability, suitability, fitness, merchantability, availability, quality, fitness for any purpose, non- infringement, compatibility and/or security;

                  (d) We are not responsible or liable for any infection or contamination of your system or device arising out of or in connection with your use of the Service or any connected service and do not warrant that the Service, the server(s) that make the Service available or any connected services are free from viruses, trojan horses, worms, software bombs or similar items or processes or other harmful components;

                  (e) We are not responsible or liable for interruptions, delays, inaccuracies, errors, or omissions arising out of your use of the Service or any connected service or with respect to the material and user material thereon; and

                  (f) We do not warrant that the Service, or any connected service, linked microsites, any materials, third-party content, other services offered will be uninterrupted or error free or accurate or suit your purpose.

                  (g) Industry standard efforts are made to keep the Service running smoothly. However, SPORTIFY takes no responsibility for, and will not be liable for, the Service being unavailable due to any reasons.

                  (h) The entire risk as to the quality, accuracy, adequacy, completeness, fitness, correctness and validity of any material and use of and access to the Service or any connected service rests solely with you.

                  (i) User(s) may encounter third party applications while using the Service including, without limitation, websites, widgets, software, services that interact with the service. Your/User(s) use of these third party applications shall be subject to such third party terms of use or license terms. SPORTIFY shall not be liable for any representations or warranties or obligations made by such third party applications to you under contract or law.

                  (j) The Service may contain links to other third-party websites/services which are not under the control of SPORTIFY. Any website/application you visit by a link from the Service is solely the responsibility of the third party providing the website. The content of, including materials and information contained on, any third-party website/application to which you link from the Service is solely the responsibility of the provider of that third party website/application. Any transactions that you enter into with a third party listed in this Service or linked from this Service are solely between you and that third party. We are not responsible for any such third-party content/feature that may be accessed via the Service, nor the organizations publishing those third-party websites/applications, and hereby disclaim any responsibility and liability for such content. The inclusion of any links does not constitute or imply an endorsement or recommendation by us of the third- party, of the quality of any product or service, advice, information or other materials displayed, purchased, or obtained by you as a result of an advertisement/functionality/necessary embedment or integrations, any other information or offer in or in connection with the third party website/application.

                  (k) To the fullest extent permissible by law, SPORTIFY, its affiliates, associates and group companies, and their respective directors, key managerial personnel, employees, officers, shareholders/partners, agents, representatives, sub-contractors, consultants and third- party providers shall not be liable for any loss and/or damage and/or claims of any kind (whether in contract, tort or breach of statutory duty or otherwise) arising out of or in connection with the Service and/or materials and/or user material and/or any connected third party website including without limitation:

                  (i) Indirect or consequential loss;

                  (ii) Loss of profits or revenue or savings or other economic loss;

                  (iii) Incidental, direct, or special loss or similar damages;

                  (iv) Loss of or damage to data;

                  (v) Loss of business, reputation or goodwill;

                  (vi) Loss of use;

                  (vii) Wasted or lost management time;

                  (viii) Even if advised of the possibility of such loss or damage or if such loss or damage was foreseeable.

                  (l) When the User(s) share password or allow a third party to access his/her account, he/she agrees to remain responsible for compliance with this Terms of Use by any such third party. We will not be liable for any loss or damage arising from your failure to adequately safeguard your password or for any actions occurring under your password.

                  (m) User(s) agree that SPORTIFY shall not be liable for any direct, special, incidental, indirect or consequential damages of any kind in connection with this agreement or your use of our Website(s)/Mobile Application(s) of SPORTIFY, even if SPORTIFY has been informed in advance of the possibility of such damages.

                  (n) Notwithstanding the foregoing, in no event shall SPORTIFY or its affiliates, associates and group companies; liability to you for any and all losses, damages or claims of whatsoever nature (whether in contract, tort, breach of statutory duty or otherwise) including under the Privacy Policy shall exceed the amount paid by you, if any, for accessing the Service provided. However, the maximum liability, in any case, whatsoever, of SPORTIFY in all instances shall not exceed INR 500 (Indian National Rupees Five Hundred only).

                  (o) If you are dissatisfied with the Service or with these Terms of Use or the Privacy Policy of our Website(s)/Mobile Application(s) of SPORTIFY, your sole and exclusive remedy is to discontinue accessing or using the Service.

                  INDEMNITY

                  User(s) agree to indemnify, defend and hold Company, its officers, directors, employees, affiliates or representatives harmless from any claim or action (including legal expenses) arising out of your use of our Website(s)/Mobile Application(s) of SPORTIFY, your breach of the Terms of Use, Privacy Policy and violation of any third party intellectual property rights or privacy in any way.

                  CHANGES OF TERMS OF USE

                  We reserve our right to modify these Terms of Use and the Privacy Policy at any time, at our sole discretion. Any changes to Terms of Use or the Privacy Policy will be posted on our Website(s)/Mobile Application(s) of SPORTIFY and your continued use of the same following a posting of such change is your agreement to all such changes made & updated and, all User(s) are bound by the then-current version of these Terms of Use or the Privacy Policy inserted upon our Website(s)/Mobile Application(s) of SPORTIFY. If any changes to these Terms of Use or the Privacy Policy are unacceptable to you, you must discontinue using our Website(s)/Mobile Application(s) of SPORTIFY. We reserve the right to suspend or deny, in our sole discretion, your access to all or any portion of our Website(s)/Mobile Application(s) of SPORTIFY, including for any violation of any provision of these Terms of Use and/or the Privacy Policy. We also reserve the right to change our Website(s)/Mobile Application(s) of SPORTIFY without any prior notice to the User(s), at any time.

                  RELATIONSHIP

                  None of the provisions of the Terms of Use and the Privacy Policy shall be deemed to constitute a partnership or agency between the User(s) and SPORTIFY and, User(s) shall have no authority to bind SPORTIFY in any manner whatsoever. If the User(s) are registering on our Website(s)/Mobile Application(s) of SPORTIFY as a business entity, you represent that you have the authority to bind your entity with all terms of this Terms of Use and the Privacy Policy of our Website(s)/Mobile Application(s) of SPORTIFY.

                  TERMINATION

                  We reserve the right, at our discretion, to immediately, with or without notice, suspend or terminate your registration/subscription, the Terms of Use, and/or your access to all or a portion of our Website(s)/Mobile Application(s) of SPORTIFY and/or remove any registration information or User Content from our Website(s)/Mobile Application(s) of SPORTIFY, for any reason. Upon termination or expiration of the Terms of Use or of your registration/subscription, your obligations and SPORTIFY's rights and disclaimers survive, but your right to use our Website(s)/Mobile Application(s) of SPORTIFY immediately ceases. Any express waiver or failure to exercise promptly any right under the Terms of Use will not create a continuing waiver or any expectation of non-enforcement.

                  MISCELLANEOUS

                  (a) These Terms of Use contain the entire understanding between User(s) and SPORTIFY and supersedes all prior understanding between the User(s) and SPORTIFY in respect of the User(s)’s access and/or use of the Service.

                  (b) If any provision of these Terms of Use is found to be illegal, invalid or unenforceable, then to the extent to which such provision is illegal, invalid or otherwise unenforceable, it shall be severed and deleted and the remaining provisions shall survive and remain in full force and effect and continue to be binding and enforceable.

                  (c) User(s) confirm that their representations, warranties, undertakings and covenants, and the clauses relating to indemnities, limitation of liability, grant of license, governing law, confidentiality shall survive the efflux of time and the termination of these Terms of Use and the Privacy Policy of our Website(s)/Mobile Application(s) of SPORTIFY.

                  (d) Any express waiver or failure to exercise promptly any right under these Terms of Use and the Privacy Policy of our Website(s)/Mobile Application(s) of SPORTIFY will not create a continuing waiver or any expectation of non-enforcement.

                  (e) User(s) agree that SPORTIFY shall be under no liability whatsoever to its User(s) in the event of non-availability of the Service or any portion thereof occasioned by Act of God, pandemic, war, disease, revolution, riot, civil commotion, strike, lockout, flood, fire, satellite failure, network failures, server failures, failure of any public utility, terrorist attack, network maintenance, service maintenance, server maintenance, or any other cause whatsoever beyond the control of SPORTIFY.

                  (f) Unless otherwise specified, the Service is presented solely for the purpose of entertainment and promoting programs. SPORTIFY makes no representation that the Service is appropriate or available for use in locations other than India. Those who choose to access the Service from locations other than in India, do so on their own initiative and risk, and are solely responsible for compliance with the relevant applicable local laws.

                  (g) The Privacy Policy (as also provided in our Website(s)/Mobile Application(s) of SPORTIFY), and any other documents, instructions, etc. included on our Website(s)/Mobile Application(s) of SPORTIFY shall be read into this and shall be a part of these Terms of Use. The Privacy Policy shall form an integral part of the Terms of Use and both these documents constitute the User(s) Agreement and a legally binding contract between SPORTIFY and the User(s).

                  (h) These Terms of Use shall be governed by and construed in accordance with the laws of India and be subject to the exclusive jurisdiction of the Courts at Delhi (India), without giving effect to any principles of conflicts of law...@
                </Text>
                <View style={{ marginBottom: 150 }}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}



function mapStateToProps(state) {

  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, leng } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,
    leng
  };
}


export default connect(mapStateToProps)(Term);