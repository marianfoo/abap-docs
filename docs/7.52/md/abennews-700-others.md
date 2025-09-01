  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Further Changes in Release 7.0

[1\. Class for system statuses](#!ABAP_MODIFICATION_1@1@)

[2\. Number of ABAP sessions per user session](#!ABAP_MODIFICATION_2@2@)

[3\. Storing of interface constants](#!ABAP_MODIFICATION_3@3@)

[4\. Exception handling for data clusters](#!ABAP_MODIFICATION_4@4@)

[5\. Authorization check for users](#!ABAP_MODIFICATION_5@5@)

[6\. Strings on selection screens](#!ABAP_MODIFICATION_6@6@)

[7\. Format of lists when sending](#!ABAP_MODIFICATION_7@7@)

Modification 1

Class for system statuses

The static methods of the class CL\_ABAP\_SYST return important system statuses and replace the evaluation of the corresponding [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") if it is necessary to ensure that a system field was not incorrectly overwritten in a program.

Modification 2

Number of ABAP Sessions per User Session

From Release 7.0, up to 16 [ABAP sessions](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") can be opened per user session, compared to the previous maximum of
6\. The actual number is controlled by the system parameter rdisp/max\_alt\_modes. The default value for this parameter is 6 as before.

To enable more than single-digit numbers in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-modno, its data type has been changed (incompatibly ) from c of length 1 to i.

Modification 3

Storage of Interface Constants

From Release 7.0, an interface constant is created exactly once in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and GET
REFERENCE returns the same reference regardless of the name. Before Release 7.0, a new interface constant was created for each implementation and different formulations like i1=>const, c1=>i1~const, or c2=>i1~const produced different references for a constant const with GET REFERENCE.

Modification 4

Exception Handling for Data Clusters

In IMPORT, the exception IMPORT\_FORMAT\_ERROR has been made handleable by assigning it to the new class CX\_SY\_IMPORT\_FORMAT\_ERROR. The exception CONNE\_IMPORT\_CONVERSION\_ERROR has been made handleable by assigning it to the existing class CX\_SY\_CONVERSION\_CODEPAGE (change was also transported back to Release 6.40)

The addition [IGNORING CONVERSION ERRORS](javascript:call_link\('abapimport_conversion.htm'\)) now also suppresses the exception raised by the fact that the number of bytes of an imported character-like component increases when it is converted to another code page, and therefore no longer fits into the target object. Up to now, only superfluous blanks were cut off without raising an exception (change was also transported back to Release 6.40).

Modification 5

Authorization Check for Users

From Release 7.0, the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) now has the addition FOR USER, which can be used to check the authorizations of any user.

Modification 6

Strings on Selection Screens

In the statement [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), it is now also possible to specify the data type string after the addition [TYPE](javascript:call_link\('abapparameters_type.htm'\)).

Modification 7

Format of Lists when Sending

The internal format into which an ABAP list is packed when the send function is called, has been changed. The previous format can still be read. From Release 7.0, to send lists to systems with older releases, the new format must be converted to the previous format using the function module LIST\_CONVERT\_TO\_OLD\_FORMAT.