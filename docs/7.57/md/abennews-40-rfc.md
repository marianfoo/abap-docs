  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC, Remote Function Call in Release 4.0, ABENNEWS-40-RFC, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC, Remote Function Call in Release 4.0

[1\. WAIT Statement](#!ABAP_MODIFICATION_1@1@)
[2\. RECEIVE Statement](#!ABAP_MODIFICATION_2@2@)
[3\. Error Messages from the Remote System](#!ABAP_MODIFICATION_3@3@)
[4\. Load Checks for Asynchronous RFC](#!ABAP_MODIFICATION_4@4@)
[5\. SNC Option Maintenance for RFC Destinations](#!ABAP_MODIFICATION_5@5@)
[6\. RFC Clients as Trusted Systems](#!ABAP_MODIFICATION_6@6@)
[7\. Authorization Check](#!ABAP_MODIFICATION_7@7@)

Modification 1   

WAIT Statement
[WAIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_arfc.htm) *\[*UNTIL condition*\]* UP TO time SECONDS
The statement WAIT makes it possible to wait for a response from a function module called asynchronously. This requires the addition PERFORMING form ON END OF TASK. WAIT must be executed in the same [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Modification 2   

RECEIVE Statement
RECEIVE RESULTS FROM FUNCTION func [KEEPING TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreceive.htm)
The KEEPING TASK addition preserves the remote context in the subroutine for reuse.

Modification 3   

Error Messages from the Remote System
If an error occurs in the target system in RFC, details of the [error message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenerror_message_glosry.htm "Glossary Entry") are passed to the calling system (SY-MSGNO, SY-MSGID, SY-MSGTY, SY-MSGV1, SY-MSGV2, SY-MSGV3, and SY-MSGV4). These fields are set to initial in each RFC call.

Modification 4   

Load Checks for Asynchronous RFC
For each RFC [destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_dest_glosry.htm "Glossary Entry"), an improved load check is performed for asynchronous RFCs (menu path Destination -\>ARFC Options in the RFC destination maintenance screen in [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry")). Before the function module is executed, the system makes sure that the target host has enough resources. If the host is overloaded, the execution of the function module is delayed (internally) for a short time. The algorithm used to determine the load situation on the target machine is the same used in asynchronous RFC with the addition [DESTINATION IN GROUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm). Be aware that this option can only be used for target hosts from Release 3.1H.

Modification 5   

SNC Option Maintenance for RFC Destinations
It is possible to define security options for each RFC destination. This is also possible for RFC Secure Network Communication. The SNC component (Secure Network Communications) provides added protection, for example by encrypting data transfers and applying secure mutual authorization between communication partners.
To use SNC, an external security product must be installed and entered in the profile (see, for example, parameter snc/enable). If SNC is used, it is possible to specify whether additional protection functions are used for this destination in the SNC Mode setting. If this is the case, additional SNC options must be defined in the menu bar: Destination -> SNC Options.

Modification 6   

RFC Clients as Trusted Systems
An RFC client that is registered as a trusted system can log on to the RFC server without a password. Trusted systems must be defined in the trusting system (the RFC server) using the transaction SMT1. In the trusted system, the transaction code SMT2 can be used to define which systems act as trusting systems.

Modification 7   

Authorization Check
If RFC communication takes place within a single system and in the same user context (with the same client and user name), no RFC authorization check based on function pools (using the [authorization object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_RFC) is performed. More information about this topic can be found in [RFC Authorizations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_authority.htm).