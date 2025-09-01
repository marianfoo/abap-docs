  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

CREATE DATA

[Quick Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax Forms

[Defines the data type implicitly](javascript:call_link\('abapcreate_data_implicit.htm'\))
1\. CREATE DATA dref *\[* [area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*.
[Defines the data type using built-in ABAP types](javascript:call_link\('abapcreate_data_built_in.htm'\))
2\. CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                   TYPE *{*abap\_type*|*(name)*}*
                        *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*.
[Defines the data type using an existing type](javascript:call_link\('abapcreate_data_existing.htm'\))
3\. CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                   *{* *{*TYPE *\[*LINE OF*\]* *{*type*|*(name)*}**}*
                   *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*.
[Creates data with reference to a type description object](javascript:call_link\('abapcreate_data_handle.htm'\))
4\. CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                   TYPE HANDLE handle.
[Creates reference variables](javascript:call_link\('abapcreate_data_reference.htm'\))
5\. CREATE DATA dref *\[* [area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                   TYPE REF TO *{*type*|*(name)*}*.
[Creates internal tables](javascript:call_link\('abapcreate_data_itab.htm'\))
6\. CREATE DATA dref *\[* [area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                   *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE
                      OF *\[*REF TO*\]* *{*type*|*(name)*}**}*
                   *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
                   *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                           *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}*
                   *|* *{*WITH EMPTY KEY*}* *\]*
                   *\[*INITIAL SIZE n*\]*.

Effect

The statement CREATE DATA creates an [anonymous data object](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") and assigns the reference to the data object of the dref reference variables.

By default, the data object is created in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") ([heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry")) of the current program and remains there for as long as it is required. If no [data references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry") and no [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") point to the data object or to a part of the data objects, it is deleted by the [garbage collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). The data object can be created as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") using the addition [area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\)).

The reference variable dref must be declared as a data reference variable. The content of a data object created using CREATE DATA can only be accessed using dereferenced data variables or field symbols (see [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\))).

The data type of the data object that is created can be defined using the addition TYPE and specifying a type or using the addition LIKE and specifying a data object. The syntax permits the dynamic definition of elementary data types, reference types, and table types. The addition HANDLE can reference any [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") type description objects. According to the rules in the section [Assignments Between Data Reference Variables](javascript:call_link\('abenconversion_references_data.htm'\)), the static type of the data reference variables has to be more general than the data type of the data object created, or be identical with it.

If a handleable exception is raised when the object is being created, the object is not created and the dref data reference variable keeps its previous state.

Notes

-   Unlike the statement [DATA](javascript:call_link\('abapdata.htm'\)), CREATE DATA creates the data object at execution time. DATA creates declared data objects when the corresponding program unit is loaded.
    
-   The statement CREATE DATA creates a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry"). All references that point to the anonymous data object or its parts are also heap references and keep the data object alive. The same applies to field symbols.
    
-   When a data type is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE DATA dref TYPE type and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
    
-   Unlike [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)), CREATE DATA does not set the return code sy-subrc.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_CREATE\_DATA\_ERROR

-   Cause: Illegal value for the addition DECIMALS.
    Runtime error: CREATE\_DATA\_ILLEGAL\_DECIMALS
    
-   Cause: Illegal value for the addition INITIAL SIZE.
    Runtime error: CREATE\_DATA\_ILLEGAL\_INIT\_SIZE
    
-   Cause: Illegal value for the addition LENGTH.
    Runtime error: CREATE\_DATA\_ILLEGAL\_LENGTH
    
-   Cause: The addition LENGTH was used for a type other than c, n, x, or p.
    Runtime error: CREATE\_DATA\_LEN\_NOT\_ALLOWED
    
-   Cause: The type specified dynamically in the addition TYPE is not typed in full.
    Runtime error: CREATE\_DATA\_NOT\_ALLOWED\_TYPE
    
-   Cause: The type specified dynamically in the addition TYPE is not known.
    Runtime error: CREATE\_DATA\_UNKNOWN\_TYPE
    

Non-Handleable Exceptions

-   Cause: The variable dref does not have the correct type.
    Runtime error: CREATE\_DATA\_REFERENCE\_EXPECTED
    

Continue
[CREATE DATA dref](javascript:call_link\('abapcreate_data_implicit.htm'\))
[CREATE DATA - TYPE abap\_type](javascript:call_link\('abapcreate_data_built_in.htm'\))
[CREATE DATA - TYPE, LIKE](javascript:call_link\('abapcreate_data_existing.htm'\))
[CREATE DATA - HANDLE](javascript:call_link\('abapcreate_data_handle.htm'\))
[CREATE DATA - REF TO](javascript:call_link\('abapcreate_data_reference.htm'\))
[CREATE DATA - TABLE OF](javascript:call_link\('abapcreate_data_itab.htm'\))
[CREATE DATA - AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\))