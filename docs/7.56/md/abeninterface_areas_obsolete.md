  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_declarations.htm) → 

Interface Work Areas

Interface work areas are created only once for each [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry") and are shared by the [main program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_glosry.htm "Glossary Entry") and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field content, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm). The following declarations are completely obsolete:

-   [DATA - COMMON PART](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_common.htm)
-   [TABLES \*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_asterisk.htm)

The statement [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm), which was once required for interface work areas between logical databases and executable programs, is also no longer required if logical databases are no longer used.

Continue
[DATA, COMMON PART](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_common.htm)
[TABLES \*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_asterisk.htm)