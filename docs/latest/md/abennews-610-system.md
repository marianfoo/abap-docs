  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Fields%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-SYSTEM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Fields in ABAP Release 6.10

[1\. Content of the System Field sy-calld](#!ABAP_MODIFICATION_1@1@)
[2\. Replacement of the System Field sy-repid](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Content of the System Field sy-calld

The field sy-calld should contain space if the program is the first and only program in a [call sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_sequence_glosry.htm "Glossary Entry"). sy-calld should contain X if the program is a called program in a call sequence. Previously, sy-calld was always set to X for SUBMIT without RETURN, even though this meant that the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") or the position in the call sequence of the caller is replaced by the called program. If the calling program was the first program in the call sequence, this produced errors in the application logic. From now on, sy-calld is not affected by SUBMIT without RETURN, and retains the value of the calling program whose internal session is being replaced.

Modification 2   

Replacement of the System Field sy-repid

The system field sy-repid is no longer a component of the structure SY in the ABAP program or the structured type SYST in ABAP Dictionary. Instead, from ABAP release 6.10, every program contains the built-in constants sy-repid and syst-repid, which both contain the name of the current program. There are also two built-in types sy-repid and syst-repid. The obsolete type references [LIKE syst-repid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_simple.htm) and [TYPE sy-repid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_simple.htm) are, therefore, still possible.

In addition to considerable performance improvements in the external procedure call, this new feature also has the advantage that sy-repid can now also be passed as a parameter to external [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"). The formal parameter is set to the name of the caller and not to the name of the [compilation unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompilation_unit_glosry.htm "Glossary Entry"), which means that a helper variable is no longer required.

This incompatible change can cause problems if ABAP programs refer to the previous structure syst, for example:

-   DATA my\_syst type syst.
    
    ... my\_syst-repid ...
    
-   ASSIGN COMPONENT 'REPID' OF STRUCTURE sy TO ...