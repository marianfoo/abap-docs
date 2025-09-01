  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) → 

Dialog Modules

Dialog modules help prepare and process [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodule.htm)
  ...
[ENDMODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendmodule.htm)

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all following processing blocks. A dialog module works with the global data types and data objects of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") and therefore should not contain its own declarations.

Continue
[MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodule.htm)
[ENDMODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendmodule.htm)