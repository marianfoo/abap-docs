  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

Data References

Data references can point to any data objects or to their parts (components, rows of internal tables, or sections determined by offset and length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) to create data objects statically and in the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) to create data objects dynamically. The statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) and the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)), to set references to table rows.

The dereferencing operator \->\* is used to access the data object to which a data reference points. If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position. For data reference variables with a generic static type, only the statement [ASSIGN dref ->\* TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) can be used to assign the data object (to which the data reference points) to a field symbol.

Data references can be [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Use field symbols and data references in appropriate ways](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry"). Uses the dereferencing operator \->\* to access the full data object and the object component selector \-> to access a component.

DATA(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).