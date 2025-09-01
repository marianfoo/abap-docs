  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_declarations.htm) → 

Interface work areas

Interface work areas are created only once for each [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry") and shared by the [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry") and its additional loaded programs. The assignment of programs to program groups can be dependent on user actions, field contents, and switches, which means that interface work areas are extremely error-prone, with respect to their functions and to their maintainability. The only interface work areas that can still be used for special purposes are [table work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm). The following declarations are completely obsolete:

-   [DATA - COMMON PART](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm)

-   [TABLES \*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_asterisk.htm)

The statement [NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm) (once required for interface work areas between logical databases and executable programs) is also no longer required if you no longer work with logical databases.

Continue
[DATA - COMMON PART](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm)
[TABLES \*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_asterisk.htm)