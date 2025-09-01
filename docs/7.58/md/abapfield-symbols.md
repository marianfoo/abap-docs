  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Field Symbols](javascript:call_link\('abenabap_field_symbols.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELD-SYMBOLS%2C%20ABAPFIELD-SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIELD-SYMBOLS

[Short Reference](javascript:call_link\('abapfield-symbols_shortref.htm'\))

Syntax

FIELD-SYMBOLS <fs> *{* [typing](javascript:call_link\('abentyping_syntax.htm'\)) *|* [obsolete\_typing](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\)) *}*.

Addition:

[... typing](#!ABAP_ONE_ADD@1@)

Effect

The statement FIELD-SYMBOLS declares a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name fs. The angle brackets distinguish field symbols from data objects and are mandatory. Field symbols can be declared in any [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and in the global declaration part of an ABAP program, but not in the declaration part of a class or an interface. A field symbol can be used in all operand positions where it is visible and that fit the [typing](javascript:call_link\('abentyping.htm'\)) defined using typing.

A field symbol is initial directly after its declaration (exception: [obsolete typings without an explicit type](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\))), which means that it does not refer to a memory area. A memory area must be assigned to it (normally using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))) before it can be used as an operand. Otherwise an exception is raised.

Hints

-   An [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of field symbols can be made using the declaration operator [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)).
-   The angle brackets are a part of the name, which means that a field symbol could potentially be called <>. Such a field symbol cannot be used at all operand positions and leads to syntax errors from case to case. Therefore, the name <> should be avoided.

Example

Declaring a field symbol <number> and using it at operand positions.

FIELD-SYMBOLS <number> TYPE i.
ASSIGN 1 TO <number>.
...
IF <number> > 10.
  CLEAR <number>.
ENDIF.

Example

Declaring a field symbol with the invalid name <>. The example shows, that the field symbol cannot be used at all operand positions. Besides CLEAR shown here, especially modern expressions are affected.

FIELD-SYMBOLS <> TYPE i.
ASSIGN 1 TO <>.
...
IF <> > 10.
  <> = 0.
  "CLEAR <>. "Syntax error
ENDIF.

Addition   

... typing

Effect

The addition typing is used to type the field symbol. The syntax of typing is described under [Typing](javascript:call_link\('abentyping_syntax.htm'\)). The typing specifies which memory areas [can](javascript:call_link\('abentyping_check_general.htm'\)) be assigned to the field symbol and in which operand positions it can be used.

Hint

In addition to the defined typing with [typing](javascript:call_link\('abentyping_syntax.htm'\)), an obsolete typing [obsolete\_typing](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\)) is also possible outside of methods.

Example

Typing of a field symbol <itab> as an internal table and a field symbol <wa> with a completely generic type.

FIELD-SYMBOLS: <itab> TYPE ANY TABLE,
               <wa>   TYPE any.
...
ASSIGN <itab>\[ KEY primary\_key ('...') = '...' \] TO <wa>.