---
title: "Field Symbols"
description: |
  Field symbols are declared using the statement FIELD-SYMBOLS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfield-symbols.htm) or the declaration operator FIELD-SYMBOL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm) and are either placehold
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_field_symbols.htm"
abapFile: "abenabap_field_symbols.htm"
keywords: ["do", "if", "try", "data", "internal-table", "field-symbol", "abenabap", "field", "symbols"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) → 

Field Symbols

Field symbols are declared using the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfield-symbols.htm) or the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm) and are either placeholders, symbolic names for existing data objects, or parts of existing data objects to which a memory area can be assigned at program runtime. A field symbol does not reserve physical space in the [data area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_area_glosry.htm "Glossary Entry") of a program like a [data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry"). Instead, it works as a dynamic identifier of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When such a statement of this type is executed, a memory area must be assigned to the field symbol using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign.htm) or the addition ASSIGNING when [processing internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm).

Field symbols can point to almost any data object. A field symbol is similar to a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dereferenced using \->\*. Unlike data reference variables, [value semantics](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_semantics_glosry.htm "Glossary Entry") are used to access a field symbol Accessing a field symbol is like accessing the named data object or part of the object itself. For data reference variables, however, [reference semantics](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_semantics_glosry.htm "Glossary Entry") apply.

Field symbols are used for generic work with data objects and for explicit [casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencast_casting_glosry.htm "Glossary Entry") of data objects, which is only possible using field symbols.

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Hints

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheap_glosry.htm "Glossary Entry") act memory-preserving, like [heap references](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheap_reference_glosry.htm "Glossary Entry").

-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). A data reference variable is declared in the same way as every other data object and the memory area for the reference it contains is in the [data area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_area_glosry.htm "Glossary Entry") of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime environment and is located in a memory area, which cannot be accessed directly in an ABAP program.

Continue
[FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfield-symbols.htm)