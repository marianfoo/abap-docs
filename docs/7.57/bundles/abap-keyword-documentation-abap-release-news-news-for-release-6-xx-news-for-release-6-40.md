# ABAP - Keyword Documentation / ABAP - Release News / News for Release 6.xx / News for Release 6.40

Included pages: 14


### abennews-640.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 6.40, ABENNEWS-640, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 6.40

Changes were made in the following areas as part of development in Release 6.40 of AS ABAP:

-   [ABAP Objects in Release 6.40](javascript:call_link\('abennews-640-objects.htm'\))
-   [Introduction of Shared Objects in Release 6.40](javascript:call_link\('abennews-640-shared_objects.htm'\))
-   [Creating Objects in Release 6.40](javascript:call_link\('abennews-640-create.htm'\))
-   [Field Symbols in Release 6.40](javascript:call_link\('abennews-640-field_symbols.htm'\))
-   [Selection Screens in Release 6.40](javascript:call_link\('abennews-640-selection_screens.htm'\))
-   [ABAP SQL in Release 6.40](javascript:call_link\('abennews-640-sql.htm'\))
-   [File Interface in Release 6.40](javascript:call_link\('abennews-640-dataset.htm'\))
-   [Data Clusters in Release 6.40](javascript:call_link\('abennews-640-datacluster.htm'\))
-   [Runtime Type Services in Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))
-   [Lists in Release 6.40](javascript:call_link\('abennews-640-lists.htm'\))
-   [External Interfaces in Release 6.40](javascript:call_link\('abennews-640-external.htm'\))
-   [Tools in Release 6.40](javascript:call_link\('abennews-640-tools.htm'\))
-   [Further Changes in Release 6.40](javascript:call_link\('abennews-640-others.htm'\))

Continue
[ABAP Objects in Release 6.40](javascript:call_link\('abennews-640-objects.htm'\))
[Introduction of Shared Objects in Release 6.40](javascript:call_link\('abennews-640-shared_objects.htm'\))
[Creating Objects in Release 6.40](javascript:call_link\('abennews-640-create.htm'\))
[Field Symbols in Release 6.40](javascript:call_link\('abennews-640-field_symbols.htm'\))
[Selection Screens in Release 6.40](javascript:call_link\('abennews-640-selection_screens.htm'\))
[ABAP SQL in Release 6.40](javascript:call_link\('abennews-640-sql.htm'\))
[File Interface in Release 6.40](javascript:call_link\('abennews-640-dataset.htm'\))
[Data Clusters in Release 6.40](javascript:call_link\('abennews-640-datacluster.htm'\))
[Runtime Type Services in Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))
[Lists in Release 6.40](javascript:call_link\('abennews-640-lists.htm'\))
[External Interfaces in Release 6.40](javascript:call_link\('abennews-640-external.htm'\))
[Tools in Release 6.40](javascript:call_link\('abennews-640-tools.htm'\))
[Further Changes in Release 6.40](javascript:call_link\('abennews-640-others.htm'\))


### abennews-640-objects.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects in Release 6.40, ABENNEWS-640-OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects in Release 6.40

[1\. Data Types and Constants in the Visibility Section of Global Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Access to Static Components of Object Types](#!ABAP_MODIFICATION_2@2@)
[3\. Use of Alias Names](#!ABAP_MODIFICATION_3@3@)
[4\. Unused Private Components](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Data Types and Constants in the Visibility Section of Global Classes

From Release 6.40, data types and constants can be created in the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of global classes and interfaces, which was not previously possible. Classes and interfaces therefore make the use of [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") superfluous, whereas for types and constants names that are longer than the names in the type pools are possible.

Modification 2   

Access to Static Components of Object Types

The statements [CLASS cl DEFINITION LOAD](javascript:call_link\('abapclass_deferred.htm'\)) and [INTERFACE in LOAD](javascript:call_link\('abapinterface_deferred.htm'\)) are now only necessary if source code contains recursive accesses to global classes or interfaces. Until now, these statements always had to be specified if [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") of global classes or interfaces were being accessed for the first time. Transaction SYNT, to which a trace for these object types has been added, can be used to detect recursive class and interface definitions.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Use of Alias Names

From Release 6.40, it is possible to specify the alias names of the methods defined using [ALIASES](javascript:call_link\('abapaliases.htm'\)) in the implementation of methods using the statement METHOD and in the [redefinition](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") of methods using the statement METHODS ...REDEFINITION. At the same time, however, from Release 6.40 there will be a warning about the syntax check if identical components are accessed within a class declaration or a method with different names.

Modification 4   

Unused Private Components

From Release 6.40, all unused private components of a class produce a warning in the extended program check. Private methods must be called and private events must be both raised and handled.


### abennews-640-shared_objects.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Introduction of Shared Objects in Release 6.40, ABENNEWS-640-SHARED_OBJECTS, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Introduction of Shared Objects in Release 6.40

[Shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") are data objects (not yet in Release 6.40) and instances of classes in [area instances](javascript:call_link\('abenarea_instance_glosry.htm'\) "Glossary Entry") in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), to which all programs in an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") have access.

For the following statements, additions can be used when working with shared objects:

[CLASS](javascript:call_link\('abapclass.htm'\)) ... [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) ...

[CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) ... [AREA HANDLE](javascript:call_link\('abapcreate_object_area_handle.htm'\))

Addition AREA HANDLE for CREATE DATA is not yet available in the first delivery of Release 6.40.

Transaction SHMA manages the [areas](javascript:call_link\('abenarea_glosry.htm'\) "Glossary Entry") for shared objects.

For more details, see [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)).


### abennews-640-create.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating Objects in Release 6.40, ABENNEWS-640-CREATE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Creating Objects in Release 6.40

[1\. Reference to a Type Description Object in CREATE DATA](#!ABAP_MODIFICATION_1@1@)
[2\. Any Reference Type in CREATE DATA](#!ABAP_MODIFICATION_2@2@)
[3\. Reference to a Generic Table Type in CREATE DATA](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference to a Type Description Object in CREATE DATA

The new addition [HANDLE](javascript:call_link\('abapcreate_data_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) makes it possible to reference [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") when data objects are created.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))). Together with the addition HANDLE, this allows the dynamic construction of any type of data objects for the program runtime.

Modification 2   

Any Reference Type in CREATE DATA

In the statement
[CREATE DATA dref TYPE REF TO (name).](javascript:call_link\('abapcreate_data_reference.htm'\))
it is now also possible to specify a data type in name. Previously, it was only possible to specify classes and interfaces.

Hint

This change was also transported to Release 6.20.

Modification 3   

Reference to a Generic Table Type in CREATE DATA

Previously, only non-generic table types could be specified in [CREATE DATA - TYPE](javascript:call_link\('abapcreate_data_existing.htm'\)). As of Release 6.40, table types with generic keys can also be specified. In this case, a new linked table type with a standard key is created and used.


### abennews-640-field_symbols.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Field Symbols in Release 6.40, ABENNEWS-640-FIELD_SYMBOLS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Field Symbols in Release 6.40

Modification

Reference to a Type Description Object in ASSIGN

The new addition [HANDLE](javascript:call_link\('abapassign_casting.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) can be used to refer to the [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") when [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") field symbols.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](javascript:call_link\('abennews-640-rtti.htm'\))). Together with the addition HANDLE, this makes it possible to cast to any existing or dynamically created types at program runtime.


### abennews-640-selection_screens.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens in Release 6.40, ABENNEWS-640-SELECTION_SCREENS, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens in Release 6.40

Modification

Arrangement of Radio Buttons

From Release 6.40, the addition [RADIOBUTTON](javascript:call_link\('abapparameters_screen.htm'\)) of the statement [PARAMETERS](javascript:call_link\('abapparameters_screen.htm'\)) displays defined radio buttons in the first position of the selection screen and the associated text on the right. Before Release 6.40, radio buttons were displayed on the right of the text.


### abennews-640-sql.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 6.40, ABENNEWS-640-SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

ABAP SQL in Release 6.40

[1\. Dynamic Checks on Ranges Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic Checks on Internal Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Upper Limit for Values in Conditions Increased](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Dynamic Checks on Ranges Tables

From Release 6.40, it is possible to analyze a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") in a [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))

Modification 2   

Dynamic Checks on Internal Tables

From Release 6.40, it is possible to analyze an internal table specified in [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) in a [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)). The syntax comparison with a column in the internal table can be made statically or dynamically.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Upper Limit for Values in Conditions Increased

From Release 6.40, the upper limit for the space required for all comparison values in WHERE, HAVING, or ON conditions as well as the values in the addition SET of the statement UPDATE is 64 MB. Previously, this limit was 64 KB.

Hint

This change was also transported back to Release 6.20.


### abennews-640-dataset.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: File Interface in Release 6.40, ABENNEWS-640-DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

File Interface in Release 6.40

[1\. New Statement TRUNCATE DATASET](#!ABAP_MODIFICATION_1@1@)
[2\. New Addition NO END OF LINE in TRANSFER](#!ABAP_MODIFICATION_2@2@)
[3\. Change to the Addition POSITION END-OF-FILE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Statement TRUNCATE DATASET

The new statement [TRUNCATE DATASET](javascript:call_link\('abaptruncate.htm'\)) sets the end of the file to a specified item, which truncates or expands the file.

Modification 2   

New Addition NO END OF LINE in TRANSFER

The new addition NO END OF LINE of the statement [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) prevents an end of file marker from being appended to the transferred data in a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file.

Modification 3   

Change to the Addition POSITION END-OF-FILE

In the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)), the name of the addition POSITION END-OF-FILE has been changed to POSITION END OF FILE for consistency. The END-OF-FILE spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.


### abennews-640-datacluster.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 6.40, ABENNEWS-640-DATACLUSTER, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 6.40

[1\. New System Class CL\_ABAP\_EXPIMP\_CONV](#!ABAP_MODIFICATION_1@1@)
[2\. Conversion Additions in IMPORT](#!ABAP_MODIFICATION_2@2@)
[3\. Stricter Structure Check in IMPORT](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New System Class CL\_ABAP\_EXPIMP\_CONV

The methods of the class CL\_ABAP\_EXPIMP\_CONV convert the release-dependent internal format of [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

Hint

This change was also transported back to Release 6.20.

Modification 2   

Conversion Additions in IMPORT

The [conversion additions](javascript:call_link\('abapimport_conversion.htm'\)) ACCEPTING PADDING, ACCEPTING TRUNCATION, and IGNORING STRUCTURE BOUNDARIES are now also possible in [IMPORT FROM SHARED BUFFER](javascript:call_link\('abapimport_medium.htm'\)).

Modification 3   

Stricter Structure Check in IMPORT

The rule that structures and substructures (in the addition ACCEPTING PADDING) in a target structure in the statement [IMPORT](javascript:call_link\('abapimport_parameterlist.htm'\)) can have more components than the source structure can lead to problems in references to the structures defined in ABAP Dictionary, if the structure is indicated there as extensible. From Release 6.40, this situation can therefore produce a warning from the extended program check.


### abennews-640-rtti.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Type Services in Release 6.40, ABENNEWS-640-RTTI, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Runtime Type Services in Release 6.40

The [runtime type services (RTTS)](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") are a further development of the former [runtime type identification (RTTI)](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). With the enhancement of the [type description classes](javascript:call_link\('abentype_class_glosry.htm'\) "Glossary Entry") to include methods for creating dynamic types (see modification 1), the RTTS include (from Release 6.40) the RTTI and also runtime type creation (RTTC).

[1\. Methods for Creating Data Types](#!ABAP_MODIFICATION_1@1@)
[2\. New Methods for Types from ABAP Dictionary](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancement of the Method GET\_COMPONENT\_TYPE](#!ABAP_MODIFICATION_3@3@)
[4\. Enhancement of the Method GET\_PROPERTY](#!ABAP_MODIFICATION_4@4@)
[5\. New Method HAS\_PROPERTY](#!ABAP_MODIFICATION_5@5@)
[6\. New Method GET\_CLASS\_NAME](#!ABAP_MODIFICATION_6@6@)
[7\. New Method GET\_DATA\_TYPE\_KIND](#!ABAP_MODIFICATION_7@7@)

Modification 1   

Methods for Creating Data Types

The type description classes of RTTI were enhanced using [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") methods. These methods create type description objects independently of existing types. This means what was previously RTTI becomes the [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry").

Together with the addition HANDLE of the statements [CREATE DATA](javascript:call_link\('abapcreate_data_handle.htm'\)) and [ASSIGN](javascript:call_link\('abapassign_casting.htm'\)), the RTTC-specific methods of the RTTS allow the construction of data objects of any types for the program runtime and the [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") of dynamic types.

The most important new methods for dynamically defining data types are:

-   GET\_C, GET\_D, GET\_F, and so on of class CL\_ABAP\_ELEMDESCR for creating type description objects for elementary data types.
-   CREATE of class CL\_ABAP\_STRUCTDESCR for creating type description objects for structured data types based on a component table.
-   CREATE of class CL\_ABAP\_TABLEDESCR for creating type description objects for table types, where the properties of the table are passed to the input parameters.
-   CREATE of class CL\_ABAP\_REFDESCR for creating type description objects for reference types, where the static type is passed to an input parameter.

Modification 2   

New Methods for Types from ABAP Dictionary

If the type of a type description object comes from ABAP Dictionary, the dictionary properties of the type can be identified using the following methods:

For any data types

-   CL\_ABAP\_TYPEDESCR=>IS\_DDIC\_TYPE
    
    returns abap\_true when the object describes a type from ABAP Dictionary
    
-   CL\_ABAP\_TYPEDESCR=>ABSOLUTE\_NAME
    
    returns the absolute name of a type (also for program-defined types)
    
-   CL\_ABAP\_TYPEDESCR=>GET\_DDIC\_HEADER
    
    returns the [nametab header](javascript:call_link\('abenname_tab_header_glosry.htm'\) "Glossary Entry") of a type from ABAP Dictionary
    
-   CL\_ABAP\_TYPEDESCR=>GET\_DDIC\_OBJECT
    
    returns the [nametab field descriptions](javascript:call_link\('abenname_tab_fields_glosry.htm'\) "Glossary Entry") of a type from ABAP Dictionary
    

For elementary data types

-   CL\_ABAP\_ELEMDESCR=>GET\_DDIC\_FIELD
    
    returns the properties of the data element and its texts (replaces function module DDIF\_FIELDINFO\_GET)
    
-   CL\_ABAP\_ELEMDESCR=>GET\_DDIC\_FIXED\_VALUES
    
    returns the [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of the data element
    

For structures and database tables

-   CL\_ABAP\_STRUCTDESCR=>GET\_DDIC\_FIELD\_LIST
    
    returns the features of the structure and its texts (replaces function module DDIF\_FIELDINFO\_GET)
    

Modification 3   

Enhancement of the Method GET\_COMPONENT\_TYPE

Previously, the method GET\_COMPONENT\_TYPE of class CL\_ABAP\_STRUCTDESCR for parameter P\_NAME only accepted actual parameters of types string and c. Although the formal parameter is type any, during the call, a type check was executed that caused a serious error for non-text-like actual parameters. Actual parameters of type csequence and numeric are now accepted. A text-like parameter is interpreted as a component name, a numeric parameter as the position of the component in the structure. An actual parameter that does not apply to csequence or numeric raises the non-class-based exception UNSUPPORTED\_INPUT\_TYPE.

Modification 4   

Enhancement of the Method GET\_PROPERTY

A new public constant CL\_ABAP\_TYPEDESCR=>TYPEPROPKIND\_HASCLIENT has been introduced. If this constant of method GET\_PROPERTY is passed to class CL\_ABAP\_TYPEDESCR, the system checks whether the type of the type description object has a client field. A reference to a data object of type abap\_bool is always returned. If the type has a client field, the referenced data object has the value of the constant abap\_true. If the type does not have a client field or if it does not affect a structure, the referenced data object has the value of the constant abap\_false.

Modification 5   

New Method HAS\_PROPERTY

A new public method HAS\_PROPERTY has been introduced in class CL\_ABAP\_TYPEDESCR. Unlike GET\_PROPERTY, this method only identifies whether a type has a property and only returns the values from abap\_true or abap\_false.

Modification 6   

New Method GET\_CLASS\_NAME

A new public method GET\_CLASS\_NAME has been introduced in class CL\_ABAP\_CLASSDESCR. This method returns the name of the class of an object.

Modification 7   

New Method GET\_DATA\_TYPE\_KIND

A new public method GET\_DATA\_TYPE\_KIND has been introduced in class CL\_ABAP\_DATADESCR. This method returns the same values as the statement [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)) with the addition TYPE. These values are also defined as constants with the prefix TYPE\_KIND\_ of class CL\_ABAP\_DATADESCR.


### abennews-640-lists.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists in Release 6.40, ABENNEWS-640-LISTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Lists in Release 6.40

Modification

Lists and Unicode

In Unicode systems, each character in the list buffer has a position but can occupy more than one column in the list, which is of particular relevance for Asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is therefore shortened accordingly and the page conforms to the [alignment](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry"). The horizontal position of the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") is only the same in the non-Unicode systems as the output column of displayed or spooled lists. In Unicode systems, this is only guaranteed for the top and bottom output limits.

The following changes were made in ABAP to comply with the behavior of lists in Unicode systems:

-   If list output in a Unicode system is reduced, this is indicated by an indicator ">" or "<". The complete content can then be displayed by choosing System → List → Unicode Display.
-   So that unnecessary reductions are not made in the Unicode systems, the new specifications \* and \*\* were introduced for the [output length](javascript:call_link\('abenwrite_output_length.htm'\)) in the [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement.
-   In Unicode systems, [predefined output formats](javascript:call_link\('abenwrite_formats.htm'\)) or [predefined output lengths](javascript:call_link\('abenwrite_output_length.htm'\)) that are different to non-Unicode systems are valid.

Hint

These changes were also downported to Release 6.20.


### abennews-640-external.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: External Interfaces in Release 6.40, ABENNEWS-640-EXTERNAL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

External Interfaces in Release 6.40

[1\. New Callback Routine in Asynchronous RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Simple Transformation Calls](#!ABAP_MODIFICATION_2@2@)
[3\. Control Options for Transformations](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Callback Routine in Asynchronous RFC

In [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)), the addition CALLING addition was introduced to also specify methods as callback routines.

Hint

This change was also transported back to Release 6.20.

Modification 2   

Simple Transformation Calls

[CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can now be used to call [Simple Transformations](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry"), as well as [XSLT](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry") programs.

Modification 3   

Control Options for Transformations

In [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the addition OPTIONS can be used to specify control options for the called transformations.


### abennews-640-tools.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Tools in Release 6.40, ABENNEWS-640-TOOLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Tools in Release 6.40

[1\. Assertions and Activatable Breakpoints](#!ABAP_MODIFICATION_1@1@)
[2\. New Two-Process Debugger](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancements to the Previous Debugger](#!ABAP_MODIFICATION_3@3@)
[4\. Memory Inspector](#!ABAP_MODIFICATION_4@4@)
[5\. Code Inspector](#!ABAP_MODIFICATION_5@5@)
[6\. ABAP Unit](#!ABAP_MODIFICATION_6@6@)
[7\. Runtime Analysis](#!ABAP_MODIFICATION_7@7@)

Modification 1   

Assertions and Activatable Breakpoints

The new statement [ASSERT](javascript:call_link\('abapassert.htm'\)) can be used to define [assertions](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry"). Assertions help verify particular assumptions about the state of a program in a particular location, and they guarantee that these assumptions hold.
Assertions can be activated from outside the program using a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") and the addition ID. The same addition was also introduced for the statement [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)) to activate breakpoints using checkpoint groups.

Hint

This change was also transported back to Release 6.20.

Modification 2   

New Two-Process Debugger

The new two-process debugger is a completely new development, with particular emphasis on the development of a more modern user interface. The main differences between this and the previous ABAP debugger are that the new debugger is executed in a separate [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") and the object that is being analyzed (the debuggee) is now the entire ABAP session instead of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

The new ABAP debugger provides the user with a flexible and freely configurable interface with over eight desktops, on which between one and four tools, such as source code display or structure display, can be placed and arranged. In Release 6.40, there is now a choice of the previous debugger and the new debugger; it is now also possible to switch between the two at any time during a debugger session.

Modification 3   

Enhancements to the Previous Debugger

-   When internal tables are displayed, offsets and lengths can be specified for the character-like components in the column headers.
-   When internal tables are displayed, the corresponding icons next to the table names can be selected to list the names of all internal tables displayed in the previous debugger session and double-clicked to display them. The display starts from the line number and the component with which the selected table was last displayed.
-   If the program flow is stuck on a CASE statement, the system branches in a single step to the affected WHEN block.
-   In ABAP Editor, external debugging can be activated and deactivated under Utilities → Settings. Depending on the settings and whether a regular ABAP program or an ABAP Script for a [BSP](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") is being edited, a prompt may appear (when creating breakpoints in ABAP Editor) asking whether these breakpoints are to be HTTP breakpoints or session breakpoints. HTTP breakpoints are persisted in the database for different logons; session breakpoints are regular breakpoints that refer to the current logon.

Modification 4   

Memory Inspector

The Memory Inspector tool was introduced for the analysis of [memory snapshots](javascript:call_link\('abenmemory_snapshot_glosry.htm'\) "Glossary Entry").

Hint

This change was also transported back to Release 6.20.

Modification 5   

Code Inspector

The Code Inspector tool was introduced to check [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") for performance, security, syntax, and the adherence to naming conventions.

Modification 6   

ABAP Unit

The [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") tool was integrated in the ABAP runtime framework to test individual program sections. ABAP Unit is based on the execution of [test methods](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry") in [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").

Modification 7   

Runtime Analysis

When measuring [BSP](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") applications, it is now also possible to specify a different variant to the standard variant for restrictions (in the runtime analysis transaction SE30).

The class CL\_ABAP\_RUNTIME provides methods for creating objects. The method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions and parallel measurements (see [Class for Runtime Measurements](javascript:call_link\('abencl_abap_runtime.htm'\))).


### abennews-640-others.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 6.40, ABENNEWS-640-OTHERS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 6.40

[1\. VALUE Addition for All DATA Statements](#!ABAP_MODIFICATION_1@1@)
[2\. LEAVE TO CURRENT TRANSACTION](#!ABAP_MODIFICATION_2@2@)
[3\. INTO Addition for the CLEANUP Statement](#!ABAP_MODIFICATION_3@3@)
[4\. IF FOUND Addition for the INCLUDE Statement](#!ABAP_MODIFICATION_4@4@)
[5\. Data Compression with GZIP](#!ABAP_MODIFICATION_5@5@)
[6\. Random Number Generator](#!ABAP_MODIFICATION_6@6@)
[7\. New Method in CL\_SYSTEM\_TRANSACTION\_STATE](#!ABAP_MODIFICATION_7@7@)
[8\. Variant MESSAGE oref for Messages](#!ABAP_MODIFICATION_8@8@)
[9\. Behavior of Error Messages in LOAD-OF-PROGRAM](#!ABAP_MODIFICATION_9@9@)
[10\. Revision of ABAP Keyword Documentation](#!ABAP_MODIFICATION_10@10@)

Modification 1   

VALUE Addition for All DATA Statements

The addition VALUE can now be used in all variants of the statement [DATA](javascript:call_link\('abapdata.htm'\)) and in all related statements, like [CONSTANTS](javascript:call_link\('abapconstants.htm'\)). Previously, the addition could not be used when creating bound table types. It is now also possible to create constants with bound table types.

Modification 2   

LEAVE TO CURRENT TRANSACTION

If the new addition CURRENT TRANSACTION is specified after [LEAVE TO TRANSACTION,](javascript:call_link\('abapleave_to_transaction.htm'\)) the current [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") is called using the transaction code used to call CALL TRANSACTION or LEAVE TO TRANSACTION. Except in the case of a [parameter transaction](javascript:call_link\('abenparameter_transaction_glosry.htm'\) "Glossary Entry") or [variant transactions](javascript:call_link\('abenvariant_transaction_glosry.htm'\) "Glossary Entry"), this is the same transaction code as in the sy-tcode system field. For parameter or variant transactions it is their transaction code, while sy-tcode contains the name of the implicitly called [dialog transaction](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry"). The transaction code for the current transaction can also be obtained using the new static method GET\_CURRENT\_TRANSACTION of class CL\_DYNPRO.

Hint

This change was also transported back to Release 6.20.

Modification 3   

INTO Addition for the CLEANUP Statement

The new addition INTO of the statement [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) is used to make a reference to the exception object in the specified reference variable.

Hint

This change was also transported back to Release 6.20.

Modification 4   

IF FOUND Addition for the INCLUDE Statement

The new addition IF FOUND can be used to prevent syntax errors in the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)) if the specified program cannot be found.

Modification 5   

Data Compression with GZIP

System classes with methods for compressing character chains and byte chains with GZIP were introduced (see [classes for compressing data](javascript:call_link\('abencl_abap_gzip.htm'\))).

Hint

This change was also transported back to Release 6.20.

Modification 6   

Random Number Generator

System classes for creating pseudo random numbers were introduced (see [classes for mathematical operations](javascript:call_link\('abencl_abap_math.htm'\))).

Modification 7   

New Method in CL\_SYSTEM\_TRANSACTION\_STATE

In class CL\_SYSTEM\_TRANSACTION\_STATE there is a new method GET\_SAP\_LUW\_KEY for determining the update key.

Modification 8   

Variant MESSAGE oref for Messages

If the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) is used, only one object reference variable can be specified whose dynamic type implements the system interface IF\_T100\_MESSAGE for oref. The attributes of the interface identify the message to be sent in table T100. The use of classes (introduced in Release 6.20) that only implement the interface IF\_MESSAGE is obsolete and only allowed for compatibility reasons.

Modification 9   

Behavior of Error Messages in LOAD-OF-PROGRAM

From Release 6.40, a program is terminated with the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED if the event block for LOAD-OF-PROGRAM contains an [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"). Before Release 6.40, the system behaved according to the context where the program was loaded.

Modification 10   

Revision of ABAP Keyword Documentation

The ABAP keyword documentation has been completely revised. An alphabetical [quick reference](javascript:call_link\('abenabap_shortref.htm'\)), an [ABAP glossary](javascript:call_link\('abenabap_glossary.htm'\)), and an alphabetic [ABAP index](javascript:call_link\('abenabap_index.htm'\)) have been added. F1 Help in ABAP Editor and Screen Painter analyzes the index and the glossary.

The color code in the hyperlinks has been changed as follows:

-   [Link](javascript:call_link\('abenabap.htm'\)) in the keyword documentation
-   [Link](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") to a glossary entry
-   Link to a program in the current AS ABAP.
