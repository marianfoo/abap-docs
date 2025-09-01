---
title: "Data References"
description: |
  Data references can point to any data objects or to their parts (components, rows of internal tables, or sections determined by offset and length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variab
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_type.htm"
abapFile: "abendata_reference_type.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "reference", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_references.htm) → 

Data References

Data references can point to any data objects or to their parts (components, rows of internal tables, or sections determined by offset and length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) to create data objects statically and in the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) to create data objects dynamically. The statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_reference.htm) and the reference operator [REF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_ref.htm) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm), to set references to table rows.

The [dereferencing operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") [\->\*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendereferencing_operator.htm) is used to access the data object to which a data reference points.

Data references can be [heap references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry") or [stack references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstack_reference_glosry.htm "Glossary Entry").

Programming Guideline

[Use field symbols and data references in appropriate ways](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry"). Uses the dereferencing operator \->\* to access the full data object and the object component selector \-> to access a component.

DATA(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).