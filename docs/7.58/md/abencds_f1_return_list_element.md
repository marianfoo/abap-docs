  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abencds_table_functions.htm'\)) →  [CDS DDL - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) →  [CDS DDL - DEFINE TABLE FUNCTION, element\_list](javascript:call_link\('abencds_f1_return_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20TABLE%20FUNCTION%2C%20element%2C%20ABENCDS_F1_RETURN_LIST_ELEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - DEFINE TABLE FUNCTION, element

Syntax

... *\[*[@element\_annot1](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]*
    *\[*[@element\_annot2](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]*
    ...
      *\[*KEY*\]* name : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<element\_annot1](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]*
    *\[*[@<element\_annot2](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]* ...

Additions:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element in the [list of elements](javascript:call_link\('abencds_f1_return_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). name expects a unique element name that complies with the [naming rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)). The names of the elements are in the same namespace as the [parameters](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of the table function. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

Each element must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)). This typing determines the data type of the corresponding component of the structured data type represented by the CDS table function and the associated column of the tabular return value result of the associated AMDP function implementation.

It is not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Addition 1   

... @element\_annot ... @<element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](javascript:call_link\('abencds_f1_return_list_annotation.htm'\)) or after the element using [@<element\_annot](javascript:call_link\('abencds_f1_return_list_annotation.htm'\)).

Hint

An [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") can be used to assign further technical and semantic properties to an element for evaluation by the ABAP runtime framework. [Framework-specific annotations](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic properties for other SAP frameworks.

Addition 2   

... KEY

Effect

KEY is used to define the current element as a key element of the current [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). Elements of the [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) can be defined as key elements, which are coherently grouped at the beginning of the list, whereby the client field of a [client-dependent](javascript:call_link\('abencds_func_client_handling.htm'\)) CDS table function is ignored. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)).
-   In implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").
    
    If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.
    

Apart of that, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS table function is activated and when other accesses are performed in program executions.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Hints

-   In the ABAP SQL syntax check, the key elements are used in places where the key is respected.
-   The key elements are not relevant for the uniqueness of rows within the result set of the CDS table function, which means that exceptions can be raised when making assignments to internal tables with appropriately unique table keys.

Continue
[CDS DDL - DEFINE TABLE FUNCTION, element\_annot](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))