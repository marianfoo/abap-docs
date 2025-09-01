  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Function Modules](javascript:call_link\('abenfunction_modules_obsolete.htm'\)) →  [FUNCTION, table\_parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exceptions when Accessing TABLES Parameters, ABENTABLES_PARAMETERS_RESTRICTIONS, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exceptions when Accessing TABLES Parameters

In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the line type of the internal table. This is checked statically by the syntax check.

In the case of TABLES parameters typed using the obsolete addition [STRUCTURE](javascript:call_link\('abapfunction_typing_obsolete.htm'\)), the compatibility of the work area with the type specified in STRUCTURE is checked. The [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") that always exists for TABLES parameters also has this type.

If a TABLES parameter is typed using STRUCTURE it can also be bound to actual parameters whose line type is longer than the type of the TABLES parameter and that are therefore incompatible with a work area recognized as correct by the syntax check. This causes problems if the components of the TABLES parameter are accessed dynamically within the procedure, since the data type of the actual parameter is evaluated at runtime. Therefore, memory limits can be violated by statements accessing a work area that references the type specified using STRUCTURE. This is why the following accesses produce the runtime error ITAB\_STRUC\_ACCESS\_VIOLATION:

-   The following statements are terminated when the component specified in name is used to access a memory area after wa.
    -   [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) [INTO wa](javascript:call_link\('abapread_table_outdesc.htm'\)) ... [COMPARING*|*TRANSPORTING ... (name) ...](javascript:call_link\('abapread_table_transport_options.htm'\))
    -   [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) [FROM wa TRANSPORTING ... (name) ...](javascript:call_link\('abapmodify_itab_single.htm'\))
    -   [APPEND wa TO itab SORTED BY ... (name) ...](javascript:call_link\('abapappend.htm'\))
-   The following statements are terminated when wa is shorter than the line type:
    -   [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) [INTO wa](javascript:call_link\('abapread_table_outdesc.htm'\)) ... [COMPARING ALL FIELDS.](javascript:call_link\('abapread_table_transport_options.htm'\))
    -   [COLLECT wa INTO itab ...](javascript:call_link\('abapcollect.htm'\))

This exception can occur particularly if the [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is used as an implicit work area. An explicit work area with the type of the actual parameter should be used to avoid this runtime error.