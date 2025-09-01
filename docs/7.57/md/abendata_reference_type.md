  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_objects.htm) →  [References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_references.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data References, ABENDATA_REFERENCE_TYPE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Data References

Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) for static and in the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) for dynamic creation of data objects. The statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_reference.htm) and the reference operator [REF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_ref.htm) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_outdesc.htm), to set references to table lines.

The [dereferencing operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") [\->\*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendereferencing_operator.htm) is used to access the data object to which a data reference points.

Data references can be [heap references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheap_reference_glosry.htm "Glossary Entry") or [stack references](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstack_reference_glosry.htm "Glossary Entry").

Programming Guideline

[Using field symbols and data references appropriately](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_access_data_obj_guidl.htm "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheap_reference_glosry.htm "Glossary Entry"). Uses the dereferencing operator \->\* to access the entire data object and the object component selector \-> to access a component.

FINAL(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).