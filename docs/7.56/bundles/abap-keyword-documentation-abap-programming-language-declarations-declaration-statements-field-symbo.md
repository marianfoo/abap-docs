# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Field Symbols

Included pages: 2


### abenabap_field_symbols.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

Field Symbols

Field symbols are declared using the statement [FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\)) or the declaration operator [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) and are either placeholders or symbolic names for existing data objects, or parts of existing data objects to which a memory area can be assigned at program runtime. A field symbol does not reserve physical space in the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") of a program like a [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"). Instead, it works as a dynamic identifier of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When such a statement is executed, a memory area must be assigned to the field symbol using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) or the addition ASSIGNING when [processing internal tables](javascript:call_link\('abentable_processing_statements.htm'\)).

Field symbols can point to almost any data object. A field symbol is similar to a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") dereferenced using \->\*. Unlike data reference variables, [value semantics](javascript:call_link\('abenvalue_semantics_glosry.htm'\) "Glossary Entry") are used to access a field symbol Accessing a field symbol is like accessing the named data object or part of the object itself. For data reference variables, however, [reference semantics](javascript:call_link\('abenreference_semantics_glosry.htm'\) "Glossary Entry") apply.

Field symbols are used for generic work with data objects and for explicit [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") of data objects, which is only possible using field symbols.

Programming Guideline

[Use field symbols and data references in appropriate ways](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline")

Hints

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") act memory-preserving, like [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").
-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry"). A data reference variable is declared in the same way as every other data object and the memory area for the reference it contains is in the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime framework and is located in a memory area, which cannot be accessed directly in an ABAP program.

Continue
[FIELD-SYMBOLS](javascript:call_link\('abapfield-symbols.htm'\))


### abapfield-symbols.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Field Symbols](javascript:call_link\('abenabap_field_symbols.htm'\)) → 

FIELD-SYMBOLS

[Short Reference](javascript:call_link\('abapfield-symbols_shortref.htm'\))

Syntax

FIELD-SYMBOLS <fs> *{* [typing](javascript:call_link\('abentyping_syntax.htm'\)) *|* [obsolete\_typing](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\)) *}*.

Addition:

[... typing](#!ABAP_ONE_ADD@1@)

Effect

The statement FIELD-SYMBOLS declares a [field symbol](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") <fs>. The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name fs. The angle brackets distinguish field symbols from data objects and are mandatory. Field symbols can be declared in any [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and in the global declaration part of an ABAP program, but not in the declaration part of a class or an interface. A field symbol can be used in all operand positions where it is visible and that fit the [typing](javascript:call_link\('abentyping.htm'\)) defined using typing.

A field symbol is initial directly after its declaration (exception: [obsolete typings without an explicit type](javascript:call_link\('abapfield-symbols_obsolete_typing.htm'\))) , which means that it does not refer to a memory area. A memory area must be assigned to it (normally using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))) before it can be used as an operand. Otherwise an exception is raised.

Hints

-   An [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of field symbols can be made using the declaration operator [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)).
-   The angle brackets are a part of the name, which means that a field symbol could potentially be called <>, which is not recommended.

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
