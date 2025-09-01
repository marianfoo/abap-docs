  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-40.htm) → 

RFC, Remote Function Call in Release 4.0

Asynchronous RFC

Modification 1

[WAIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_arfc.htm) *\[*UNTIL condition*\]* UP TO time SECONDS
The command WAIT makes it possible to wait for a response from a
function module called asynchronously. This requires the addition PERFORMING form ON END OF TASK. WAIT must be executed in the same [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Modification 2

RECEIVE RESULTS FROM FUNCTION func [KEEPING TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive.htm)
The KEEPING TASK addition preserves the remote context in the subroutine for reuse.

Other Changes

Modification 3

Error messages from the remote system
If an error occurs in the target system in RFC, details of the [error message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenerror_message_glosry.htm "Glossary Entry") are passed to the calling system (SY-MSGNO, SY-MSGID, SY-MSGTY, SY-MSGV1, SY-MSGV2, SY-MSGV3, and SY-MSGV4). These fields are set to initial in each RFC call.

Modification 4

Load checks for asynchronous RFC
For each RFC [destination](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_dest_glosry.htm "Glossary Entry"), an improved load check is performed for asynchronous RFCs (menu path Destination -\>ARFC Options in the RFC destination maintenance screen in [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry")). Before the function module is executed, the system makes sure that the target host has enough resources. If the host is overloaded, the execution of the function module is delayed (internally) for a short time. The algorithm used to determine the load situation on the target machine is the same used in asynchronous RFC with the addition [DESTINATION IN GROUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_starting.htm). Be aware that this option can only be used for target hosts from Release 3.1H.

Modification 5

SNC option maintenance for RFC destinations
It is possible to define security options for each RFC destination. This is also possible for RFC Secure Network Communication. The SNC component (Secure Network Communications) provides added protection, for example by encrypting data transfers and applying secure mutual authorization between communication partners.
To use SNC, an external security product must be installed and entered in the profile (see, for example, parameter snc/enable). If SNC is used, it is possible to specify whether additional protection functions are used for this destination in the SNC Mode setting. If this is the case, additional SNC options must be defined in the menu bar: Destination -> SNC Options.

Modification 6

RFC clients as trusted systems
An RFC client that is registered as a trusted system can log on to the RFC server without a password. Trusted systems must be defined in the trusting system (the RFC server) using the transaction SMT1. In the trusted system, the transaction code SMT2 can be used to define which systems act as trusting systems.

Modification 7

Authorization check
If RFC communication takes place within a single system and in the same user context (with the same client and user name), no RFC authorization check based on function pools (using the [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_RFC) is performed. More information about this topic can be found in [RFC Authorizations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_authority.htm).