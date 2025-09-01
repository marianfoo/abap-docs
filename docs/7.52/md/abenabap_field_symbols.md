---
title: "Field Symbols"
description: |
  Field symbols are placeholders or symbolic names for existing data objects (or parts of existing data objects), declared by the statement FIELD-SYMBOLS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm) or by the declaration operator FIELD-SYMBOL(https://help.sap.c
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_field_symbols.htm"
abapFile: "abenabap_field_symbols.htm"
keywords: ["do", "if", "try", "data", "internal-table", "field-symbol", "abenabap", "field", "symbols"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) → 

Field Symbols

Field symbols are placeholders or symbolic names for existing data objects (or parts of existing data objects), declared by the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm) or by the declaration operator [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm). A memory area is assigned to a field symbol at program runtime. A field symbol does not reserve physical space in the [data area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_area_glosry.htm "Glossary Entry") of a program like with a [data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry"). Instead, it works as a dynamic name of a memory area, where a specific data object or part of an object is located. A field symbol can be used instead of data objects at operand positions of statements. When a statement of this type is executed, a memory area must be assigned to the field symbol by the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) or the addition ASSIGNING when [processing internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm).

Field symbols can point to almost any data object. A field symbol is the equivalent of a [data reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dereferenced using \->\*. Unlike data reference variables, [value semantics](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_semantics_glosry.htm "Glossary Entry") are used to access a field symbol Accessing a field symbol is like accessing the named data object (or part of the object). For data reference variables, however, [reference semantics](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_semantics_glosry.htm "Glossary Entry") apply.

Field symbols are implemented both for generic work with data objects and for explicit [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry") of data objects (only possible using field symbols).

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Notes

-   Field symbols to which data objects or parts of data objects are assigned in the [heap](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_glosry.htm "Glossary Entry") are memory-preserving, like [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry").

-   From a technical perspective, the field symbols are implemented by references or pointers, which are comparable to references in [data reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). A data reference variable is declared in the same way as every other data object und the memory area for the reference contained in the variable is located in the [data area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_area_glosry.htm "Glossary Entry") of the ABAP program. However, the pointer assigned to a field symbol is exclusively managed by the ABAP runtime environment and is located in the memory area, which cannot be accessed directly in an ABAP program.

Continue
[FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm)