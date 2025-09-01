  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-610.htm) → 

System Fields in Release 6.10

[1\. Content of the system field sy-calld](#!ABAP_MODIFICATION_1@1@)
[
2\. Replacement of the system field sy-repid](#!ABAP_MODIFICATION_2@2@)

Modification 1

Content of the system field sy-calld

The field sy-calld should contain space if the program is the first and only program in a [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"). sy-calld should contain "X" if the program is a called program in a call sequence. Previously, sy-calld was always set to "X" for SUBMIT without RETURN, even though this meant that the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") or the position in the call sequence of the caller is replaced by the called program. If the calling program was the first program in the call sequence, this produced errors in the application logic. From now on, sy-calld is not influenced by SUBMIT without RETURN, and retains the value of the calling program whose internal session is being replaced.

Modification 2

Replacement of the system field sy-repid

The system field sy-repid is no longer a component of the structure SY in the ABAP program or the structured type SYST in ABAP Dictionary. Instead, from Release 6.10, every program contains the predefined constants sy-repid and syst-repid, which both contain the name of the current program. There are also two predefined types sy-repid and syst-repid. The obsolete type references [LIKE syst-repid](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_simple.htm) and [TYPE sy-repid](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_simple.htm) are, therefore, still possible.

In addition to considerable performance improvements in the external procedure call, this new feature also has the advantage that sy-repid can now also be passed as a parameter to external [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"). The formal parameter is set to the name of the caller and not to the name of the [master program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenframe_program_glosry.htm "Glossary Entry"), which means that an auxiliary variable is no longer required.

This incompatible change can cause problems if ABAP programs refer to the previous structure syst, for example:

-   DATA my\_syst type syst.
    ... my\_syst-repid ...
    
-   ASSIGN COMPONENT 'REPID' OF STRUCTURE sy TO ...