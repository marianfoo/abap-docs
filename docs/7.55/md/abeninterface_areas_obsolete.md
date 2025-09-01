  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) → 

Interface Work Areas

Interface work areas are created only once for each [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") and shared by the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field contents, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") declared using [TABLES](javascript:call_link\('abaptables.htm'\)). The following declarations are completely obsolete:

-   [DATA - COMMON PART](javascript:call_link\('abapdata_common.htm'\))

-   [TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\))

The statement [NODES](javascript:call_link\('abapnodes.htm'\)) (once required for interface work areas between logical databases and executable programs) is also no longer required if logical databases are no longer used.

Continue
[DATA, COMMON PART](javascript:call_link\('abapdata_common.htm'\))
[TABLES \*](javascript:call_link\('abaptables_asterisk.htm'\))