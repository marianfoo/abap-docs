  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Declarations%2C%20ABENDECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Declarations

Declarations define the properties of program local [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"), [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry"), [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"), [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"). Declarations are made either with [declaration statements](javascript:call_link\('abendeclaration_statement_glosry.htm'\) "Glossary Entry") or as [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") using [declaration expressions](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry"). Furthermore, inside [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") local helper variables can be declared with [LET expressions](javascript:call_link\('abenlet_expression_glosry.htm'\) "Glossary Entry").

Besides the declarations shown here, the [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of the [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") can be declared with the respective [modularization statements](javascript:call_link\('abenabap_language_modularization.htm'\)). For those and also for field symbols, the date type can be either [complete](javascript:call_link\('abencomplete_typing_glosry.htm'\) "Glossary Entry") or [generic](javascript:call_link\('abengeneric_typing_glosry.htm'\) "Glossary Entry") and the definition of that type is called [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry").

-   [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\))
-   [Inline Declarations](javascript:call_link\('abeninline_declarations.htm'\))
-   [Local Declarations in Constructor Expressions](javascript:call_link\('abenlocal_expr_declarations.htm'\))
-   [Typing](javascript:call_link\('abentyping.htm'\))

Hints

-   The declared entity is visible statically as soon as it is declared and is valid throughout its entire [context](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry").
-   Entities declared in [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and [interface pools](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry") are program local within these but can be made public for external usage. This involves [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"), [global interfaces](javascript:call_link\('abenglobal_interface_glosry.htm'\) "Glossary Entry") and their [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry") components.
-   Local declarations always hide the more global declarations of the superordinate contexts.

Continue
[Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\))
[Inline Declarations](javascript:call_link\('abeninline_declarations.htm'\))
[Local Declarations in Constructor Expressions](javascript:call_link\('abenlocal_expr_declarations.htm'\))
[Typing](javascript:call_link\('abentyping.htm'\))