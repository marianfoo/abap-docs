  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

System Fields in Release 6.10

[1\. Content of the system field sy-calld](#!ABAP_MODIFICATION_1@1@)
[2\. Replacement of the system field sy-repid](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Content of the system field sy-calld

The field sy-calld should contain space if the program is the first and only program in a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). sy-calld should contain "X" if the program is a called program in a call sequence. Previously, sy-calld was always set to "X" for SUBMIT without RETURN, even though this meant that the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or the position in the call sequence of the caller is replaced by the called program. If the calling program was the first program in the call sequence, this produced errors in the application logic. From now on, sy-calld is not affected by SUBMIT without RETURN, and retains the value of the calling program whose internal session is being replaced.

Modification 2   

Replacement of the system field sy-repid

The system field sy-repid is no longer a component of the structure SY in the ABAP program or the structured type SYST in ABAP Dictionary. Instead, from Release 6.10, every program contains the built-in constants sy-repid and syst-repid, which both contain the name of the current program. There are also two built-in types sy-repid and syst-repid. The obsolete type references [LIKE syst-repid](javascript:call_link\('abapdata_simple.htm'\)) and [TYPE sy-repid](javascript:call_link\('abaptypes_simple.htm'\)) are, therefore, still possible.

In addition to considerable performance improvements in the external procedure call, this new feature also has the advantage that sy-repid can now also be passed as a parameter to external [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). The formal parameter is set to the name of the caller and not to the name of the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry"), which means that a helper variable is no longer required.

This incompatible change can cause problems if ABAP programs refer to the previous structure syst, for example:

-   DATA my\_syst type syst.
    
    ... my\_syst-repid ...
    
-   ASSIGN COMPONENT 'REPID' OF STRUCTURE sy TO ...