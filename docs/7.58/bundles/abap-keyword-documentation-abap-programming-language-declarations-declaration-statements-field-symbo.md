# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Field Symbols

Included pages: 2


### abenabap_field_symbols.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20ABENABAP_FIELD_SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Field Symbols

Field symbols are declared using the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols.htm) or the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm) and are either placeholders or symbolic names for existing data objects, or parts of existing data objects to which a memory area can be assigned at program runtime. A field symbol does not reserve physical space in the [data area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_area_glosry.htm "Glossary Entry") of a program like a [data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry"). Instead, it works as a dynamic identifier of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When such a statement is executed, a memory area must be assigned to the field symbol using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) or the addition ASSIGNING when [processing internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm).

Field symbols can point to almost any data object. A field symbol is similar to a [data reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dereferenced using \->\*. Unlike data reference variables, [value semantics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_semantics_glosry.htm "Glossary Entry") are used to access a field symbol. Accessing a field symbol is like accessing the named data object or part of the object itself. For data reference variables, however, [reference semantics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_semantics_glosry.htm "Glossary Entry") apply.

Field symbols are used for generic work with data objects and for explicit [casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") of data objects, which is only possible using field symbols.

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Hints

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm "Glossary Entry") act memory-preserving, like [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry").
-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). A data reference variable is declared in the same way as every other data object and the memory area for the reference it contains is in the [data area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_area_glosry.htm "Glossary Entry") of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime framework and is located in a memory area, which cannot be accessed directly in an ABAP program.

Continue
[FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols.htm)


### abapfield-symbols.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_field_symbols.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELD-SYMBOLS%2C%20ABAPFIELD-SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FIELD-SYMBOLS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols_shortref.htm)

Syntax

FIELD-SYMBOLS <fs> *{* [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm) *|* [obsolete\_typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols_obsolete_typing.htm) *}*.

Addition:

[... typing](#!ABAP_ONE_ADD@1@)

Effect

The statement FIELD-SYMBOLS declares a [field symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs>. The [naming conventions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_conventions.htm) apply to the name fs. The angle brackets distinguish field symbols from data objects and are mandatory. Field symbols can be declared in any [procedure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") and in the global declaration part of an ABAP program, but not in the declaration part of a class or an interface. A field symbol can be used in all operand positions where it is visible and that fit the [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) defined using typing.

A field symbol is initial directly after its declaration (exception: [obsolete typings without an explicit type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols_obsolete_typing.htm)), which means that it does not refer to a memory area. A memory area must be assigned to it (normally using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm)) before it can be used as an operand. Otherwise an exception is raised.

Hints

-   An [inline declaration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declaration_glosry.htm "Glossary Entry") of field symbols can be made using the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm).
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

The addition typing is used to type the field symbol. The syntax of typing is described under [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm). The typing specifies which memory areas [can](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm) be assigned to the field symbol and in which operand positions it can be used.

Hint

In addition to the defined typing with [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_syntax.htm), an obsolete typing [obsolete\_typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols_obsolete_typing.htm) is also possible outside of methods.

Example

Typing of a field symbol <itab> as an internal table and a field symbol <wa> with a completely generic type.

FIELD-SYMBOLS: <itab> TYPE ANY TABLE,
               <wa>   TYPE any.
...
ASSIGN <itab>\[ KEY primary\_key ('...') = '...' \] TO <wa>.
