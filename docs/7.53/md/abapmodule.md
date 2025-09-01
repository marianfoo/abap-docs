  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Dialog Modules](javascript:call_link\('abendialog_module.htm'\)) → 

MODULE

[Quick Reference](javascript:call_link\('abapmodule_shortref.htm'\))

Syntax

MODULE mod *{*OUTPUT*|**\[*INPUT*\]**}*.
  ...
ENDMODULE.

Addition:

[... OUTPUT*|**\[*INPUT*\]*](#!ABAP_ONE_ADD@1@)

Effect

The statement MODULE defines a [dialog module](javascript:call_link\('abendialog_module_glosry.htm'\) "Glossary Entry") mod. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name mod. The functions of a dialog module mod are implemented between the statements MODULE ad ENDMODULE.

A dialog module is called using the [MODULE](javascript:call_link\('dynpmodule.htm'\)) statement with the same name of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") of any ABAP program [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry").

Addition

... OUTPUT*|**\[*INPUT*\]*

Effect

The additions OUTPUT and INPUT determine whether the dialog module can be called for the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") event or for the [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event. The addition INPUT is the default and can therefore also be omitted, although this is not recommended for the readability of the program. Two dialog modules with the same name can be defined in a program, if one of them has the addition OUTPUT and the other has the addition INPUT. This is also not recommended for reasons of readability.

Note

For data encapsulation reasons, it is recommended that very few functions are implemented in dialog modules and that [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") are called instead.

Example

PAI module for a dynpro with the dynpro number 100. The PAI module calls an instance method of a dedicated object and does not implement any functions.

MODULE user\_command\_0100 INPUT.
  screen\_handler->user\_command( ).
ENDMODULE.