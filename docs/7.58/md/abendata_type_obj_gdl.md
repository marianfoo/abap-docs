  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Types%20and%20Data%20Objects%2C%20ABENDATA_TYPE_OBJ_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Types and Data Objects

Together with classes and objects, data types and data objects are the essentials of ABAP programming.

-   Data type
    
    A data type describes a data object, just as a class describes an object. In this sense, a data type is comparable with a class without methods. ABAP interprets the content of a data object in accordance with its data type. Data types exist either as properties bound to data objects or as standalone data objects. Standalone data types can be defined either in ABAP Dictionary or using the statement TYPES in an ABAP program.
    
-   Data object
    
    A data object is an instance of a data type, just as an object is an instance of a class. It exists in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an ABAP program or as a shared object in the shared memory and occupies memory there for the contained data. A data object is created either implicitly when a program or procedure is loaded (named data object), or by using the statement CREATE DATA (anonymous data object). Named data objects are either variables (statements DATA, CLASS-DATA, and others) or constants (statement CONSTANTS). Variables and especially immutable variables can also be declared inline with [declaration operators](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry").
    

A data type describes the technical properties of a data object (for example, the elementary types it is comprised of, its length) and semantic properties (what type of entity is represented by the data object). Types that are defined in ABAP dictionary have additional properties, for example for input/output on a classic dynpro or in Web Dynpro.

As far as the ABAP runtime framework is concerned, only the technical properties of a data object are of interest for program execution. However, the semantic information, which is linked to the appropriate use of types, is essential for the legibility of the source code. For this reason, some of the rules covered in this section could also fall under the heading [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)), since this covers not only robustness, but also good style, which, although it does not affect program execution, is nevertheless significant for readability and maintainability.

-   [Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\) "Guideline")
-   [Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\) "Guideline")
-   [Declaration of Variables](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline")
-   [Inline Declarations](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline")
-   [Immutable Variables](javascript:call_link\('abenimmutable_variables_guidl.htm'\) "Guideline")
-   [Including Structures](javascript:call_link\('abenincluding_structures_guidl.htm'\) "Guideline")
-   [Using Types](javascript:call_link\('abenusing_types_guidl.htm'\) "Guideline")
-   [Reference to Data Types or Data Objects](javascript:call_link\('abenref_types_objects_guidl.htm'\) "Guideline")
-   [Table Work Areas](javascript:call_link\('abentable_work_area_guidl.htm'\) "Guideline")
-   [Literals](javascript:call_link\('abenliterals_guidl.htm'\) "Guideline")
-   [Strings](javascript:call_link\('abenstrings_guidl.htm'\) "Guideline")
-   [Start Values](javascript:call_link\('abenstart_values_guidl.htm'\) "Guideline")
-   [Data Type for Truth Values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\) "Guideline")

Continue
[Bound and Standalone Data Types](javascript:call_link\('abenbound_independent_dtype_guidl.htm'\))
[Declaration of Data Types and Constants](javascript:call_link\('abendeclaration_dtypes_const_guidl.htm'\))
[Declaration of Variables](javascript:call_link\('abendeclaration_variables_guidl.htm'\))
[Inline Declarations](javascript:call_link\('abendeclaration_inline_guidl.htm'\))
[Immutable Variables](javascript:call_link\('abenimmutable_variables_guidl.htm'\))
[Including Structures](javascript:call_link\('abenincluding_structures_guidl.htm'\))
[Using Types](javascript:call_link\('abenusing_types_guidl.htm'\))
[Reference to Data Types or Data Objects](javascript:call_link\('abenref_types_objects_guidl.htm'\))
[Table Work Areas](javascript:call_link\('abentable_work_area_guidl.htm'\))
[Literals](javascript:call_link\('abenliterals_guidl.htm'\))
[Strings](javascript:call_link\('abenstrings_guidl.htm'\))
[Start Values](javascript:call_link\('abenstart_values_guidl.htm'\))
[Data Type for Truth Values](javascript:call_link\('abendataobjects_true_value_guidl.htm'\))