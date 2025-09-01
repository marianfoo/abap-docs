  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20References%2C%20ABENDATA_REFERENCE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data References

Data references can point to any data objects or to their parts (components, lines of internal tables, or subareas determined by offset or length specifications). The static type of their reference variables is either the built-in generic type data or any non-generic data type. Data reference variables can be used with the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) for static and in the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) for dynamic creation of data objects. The statement [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) and the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)) can be used to write references to existing data objects in data reference variables. When internal tables are processed, most statements have the addition [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)), to set references to table lines.

The [dereferencing operator](javascript:call_link\('abendereferencing_operat_glosry.htm'\) "Glossary Entry") [\->\*](javascript:call_link\('abendereferencing_operator.htm'\)) is used to access the data object to which a data reference points.

Data references can be [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry").

Programming Guideline

[Using field symbols and data references appropriately](javascript:call_link\('abendyn_access_data_obj_guidl.htm'\) "Guideline")

Example

Inline declaration of a data reference variable dref with the static type scarr on the left side of a corresponding anonymous data object created on the [heap](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry"). Uses the dereferencing operator \->\* to access the entire data object and the object component selector \-> to access a component.

FINAL(dref) = NEW scarr( ).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display\_data( dref->carrid ).