  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20ABENABAP_FIELD_SYMBOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Field Symbols

Field symbols are declared using the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-symbols.htm) or the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm) and are either placeholders or symbolic names for existing data objects, or parts of existing data objects to which a memory area can be assigned at program runtime. A field symbol does not reserve physical space in the [data area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_area_glosry.htm "Glossary Entry") of a program like a [data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm "Glossary Entry"). Instead, it works as a dynamic identifier of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When such a statement is executed, a memory area must be assigned to the field symbol using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) or the addition ASSIGNING when [processing internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm).

Field symbols can point to almost any data object. A field symbol is similar to a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dereferenced using \->\*. Unlike data reference variables, [value semantics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_semantics_glosry.htm "Glossary Entry") are used to access a field symbol. Accessing a field symbol is like accessing the named data object or part of the object itself. For data reference variables, however, [reference semantics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_semantics_glosry.htm "Glossary Entry") apply.

Field symbols are used for generic work with data objects and for explicit [casting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry") of data objects, which is only possible using field symbols.

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Hints

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_glosry.htm "Glossary Entry") act memory-preserving, like [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry").
-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). A data reference variable is declared in the same way as every other data object and the memory area for the reference it contains is in the [data area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_area_glosry.htm "Glossary Entry") of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime framework and is located in a memory area, which cannot be accessed directly in an ABAP program.

Continue
[FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-symbols.htm)