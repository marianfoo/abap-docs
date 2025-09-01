  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Field Symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_field_symbols.htm) → 

FIELD-SYMBOLS

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-symbols_shortref.htm)

Syntax

FIELD-SYMBOLS <fs> *{* [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_syntax.htm) *|* [obsolete\_typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-symbols_obsolete_typing.htm) *}*.

Addition:

[... typing](#!ABAP_ONE_ADD@1@)

Effect

The statement FIELD-SYMBOLS declares a [field symbol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs>. The [naming conventions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennaming_conventions.htm) apply to the name fs. The angle brackets distinguish field symbols from data objects and are mandatory. Field symbols can be declared in any [procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") and in the global declaration part of an ABAP program, but not in the declaration part of a class or an interface. A field symbol can be used in all operand positions where it is visible and that fit the [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping.htm) defined using typing.

A field symbol is initial directly after its declaration (exception: [obsolete typings without an explicit type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-symbols_obsolete_typing.htm)) , which means that it does not refer to a memory area. A memory area must be assigned to it (normally using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm)) before it can be used as an operand. Otherwise an exception is raised.

Hints

-   An [inline declaration](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of field symbols can be made using the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield-symbol_inline.htm).
-   The angle brackets are a part of the name, which means that a field symbol could potentially be called <>, which is not recommended.

Addition   

... typing

Effect

The addition typing is used to type the field symbol. The syntax of typing is described under [Typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_syntax.htm). The typing specifies which memory areas [can](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_check_general.htm) be assigned to the field symbol and in which operand positions it can be used.

Hint

In addition to the defined typing with [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_syntax.htm), an obsolete typing [obsolete\_typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfield-symbols_obsolete_typing.htm) is also possible outside of methods.

Example

Typing of a field symbol <itab> as an internal table and a field symbol <wa> with a completely generic type.

FIELD-SYMBOLS: <itab> TYPE ANY TABLE,
               <wa>   TYPE any.
...
ASSIGN <itab>\[ KEY primary\_key ('...') = '...' \] TO <wa>.