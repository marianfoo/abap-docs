  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) → 

Dialog Modules

Dialog modules help prepare and process [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). No local data types and data objects can be declared within a dialog module whose functions are implemented between the following statements:

[MODULE](javascript:call_link\('abapmodule.htm'\))
  ...
[ENDMODULE](javascript:call_link\('abapendmodule.htm'\))

All declarative statements in dialog modules are global data declarations of the ABAP program and are visible in all following processing blocks. A dialog module works with the global data types and data objects of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") and therefore should not contain its own declarations.

Continue
[MODULE](javascript:call_link\('abapmodule.htm'\))
[ENDMODULE](javascript:call_link\('abapendmodule.htm'\))