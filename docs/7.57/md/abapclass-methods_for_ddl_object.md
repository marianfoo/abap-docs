  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP Managed Database Procedures (AMDP)](javascript:call_link\('abenamdp.htm'\)) →  [AMDP - Methods](javascript:call_link\('abenamdp_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS-METHODS, FOR DDL OBJECT, ABAPCLASS-METHODS_FOR_DDL_OBJECT, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CLASS-METHODS, FOR DDL OBJECT

[Short Reference](javascript:call_link\('abapclass-methods_shortref.htm'\))

Syntax

CLASS-METHODS meth FOR DDL OBJECT
                   *\[*OPTIONS CDS CLIENT REQUIRED*\]*.

Additions:

[1\. ... OPTIONS CDS CLIENT REQUIRED.](#!ABAP_ADDITION_1@1@)

Effect

Methods defined with FOR DDL OBJECT are used to support [DDL objects](javascript:call_link\('abenddl_object_glosry.htm'\) "Glossary Entry") with [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). For example, the following DDL objects can be used with AMDP:

-   [Views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry")
-   [L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry") libraries
-   [Graph workspaces](javascript:call_link\('abengraph_workspace_glosry.htm'\) "Glossary Entry")

Note: [Database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry") are not considered as DDL objects.

The methods have the following characteristics:

-   Must be defined and implemented in an [AMDP class](javascript:call_link\('abenamdp_class_glosry.htm'\) "Glossary Entry").
-   Must be [static](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"), i. e. only using CLASS-METHODS statements.
-   Can be public, protected or private.
-   Must not have any parameters and exceptions.
-   Must not be defined in interfaces.
-   Can be based on [DDIC](javascript:call_link\('abenddic_glosry.htm'\) "Glossary Entry") artifacts and are therefore be client-dependent. In this case, the addition using OPTIONS ... is required.
-   Cannot be called as methods in ABAP.
-   Cannot be [redefined](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry").

The method implementation must be included for the respective DDL object following the syntax outlined in the topic [METHOD, BY DATABASE ...](javascript:call_link\('abapmethod_by_db_proc.htm'\)).

Addition 1   

... OPTIONS CDS CLIENT REQUIRED.

Effect

Informs the caller of the method that another client is used. The methods using FOR DDL OBJECT can be based on [DDIC](javascript:call_link\('abenddic_glosry.htm'\) "Glossary Entry") artifacts and are therefore client-dependent. Currently, the addition is only required if a [graph workspace](javascript:call_link\('abengraph_workspace_glosry.htm'\) "Glossary Entry") is defined using client-dependent views.

Executable Example

The example [AMDP - Graph Processing](javascript:call_link\('abenamdp_graph_abexa.htm'\)) demonstrates graph processing using a graph workspace and a graph procedure. In this context, a graph workspace is declared using the CLASS-METHODS statement with the addition FOR DDL OBJECT.