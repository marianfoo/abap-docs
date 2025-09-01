  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) → 

CREATE DATA

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_shortref.htm)

Syntax Forms

[Defines the data type implicitly](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_implicit.htm)
1\. CREATE DATA dref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*.
[Defines the data type using built-in ABAP types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_built_in.htm)
2\. CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                   TYPE *{*abap\_type*|*(name)*}*
                        *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*.
[Defines the data type using an existing type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_existing.htm)
3\. CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                   *{* *{*TYPE *\[*LINE OF*\]* *{*type*|*(name)*}**}*
                   *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*.
[Creates data with reference to a type description object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_handle.htm)
4\. CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                   TYPE HANDLE handle.
[Creates reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_reference.htm)
5\. CREATE DATA dref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                   TYPE REF TO *{*type*|*(name)*}*.
[Creates internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_itab.htm)
6\. CREATE DATA dref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                   *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE
                      OF *\[*REF TO*\]* *{*type*|*(name)*}**}*
                   *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
                   *\[* *{*WITH *\[*UNIQUE*|*NON-UNIQUE*\]*
                           *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}*
                   *|* *{*WITH EMPTY KEY*}* *\]*
                   *\[*INITIAL SIZE n*\]*.

Effect

The statement CREATE DATA creates an [anonymous data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") and assigns the reference to the data object of the dref reference variables.

By default, the data object is created in the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") ([heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_glosry.htm "Glossary Entry")) of the current program and remains there for as long as it is required. If no [data references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_glosry.htm "Glossary Entry") and no [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry") point to the data object or to a part of the data objects, it is deleted by the [garbage collector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The data object can be created as a [shared object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_object_glosry.htm "Glossary Entry") using the addition [area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm).

The reference variable dref must be declared as a data reference variable. The content of a data object created using CREATE DATA can only be accessed using dereferenced data variables or field symbols (see [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_data_objects.htm)).

The data type of the data object that is created can be defined using the addition TYPE and specifying a type or using the addition LIKE and specifying a data object. The syntax permits the dynamic definition of elementary data types, reference types, and table types. The addition HANDLE can reference any [RTTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") type description objects. According to the rules in the section [Assignments Between Data Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_references_data.htm), the static type of the data reference variables has to be more general than the data type of the data object created, or be identical with it.

If a handleable exception is raised when the object is being created, the object is not created and the dref data reference variable keeps its previous state.

Notes

-   Unlike the statement [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm), CREATE DATA creates the data object at execution time. DATA creates declared data objects when the corresponding program unit is loaded.
    
-   The statement CREATE DATA creates a [heap reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry"). All references that point to the anonymous data object or its parts are also heap references and keep the data object alive. The same applies to field symbols.
    
-   When a data type is used, the [instance operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE DATA dref TYPE type and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
    
-   Unlike [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm), CREATE DATA does not set the return code sy-subrc.
    

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

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
[CREATE DATA dref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_implicit.htm)
[CREATE DATA - TYPE abap\_type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_built_in.htm)
[CREATE DATA - TYPE, LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_existing.htm)
[CREATE DATA - HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_handle.htm)
[CREATE DATA - REF TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_reference.htm)
[CREATE DATA - TABLE OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_itab.htm)
[CREATE DATA - AREA HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)