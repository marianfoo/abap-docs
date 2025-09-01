  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dialog%20Modules%2C%20ABENDIALOG_MODULE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dialog Modules

Dialog modules help prepare and process [screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)
  ...
[ENDMODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendmodule.htm)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all subsequent processing blocks. A dialog module works with the global data types and data objects of the [compilation unit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and should therefore not contain its own declarations.

Continue
[MODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodule.htm)
[ENDMODULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendmodule.htm)