---
title: "Declarations"
description: |
  Declarations define the properties of program local classes(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm 'Glossary Entry'), interfaces(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm 'Glossary Entry'), data types(ht
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm"
abapFile: "abendeclarations.htm"
keywords: ["do", "if", "try", "class", "data", "types", "field-symbol", "abendeclarations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Declarations%2C%20ABENDECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Declarations

Declarations define the properties of program local [classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry"), [interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm "Glossary Entry"), [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry"), [data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm "Glossary Entry") and [field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry"). Declarations are made either with [declaration statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_statement_glosry.htm "Glossary Entry") or as [inline declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declaration_glosry.htm "Glossary Entry") using [declaration expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_expression_glosry.htm "Glossary Entry"). Furthermore, inside [constructor expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") local helper variables can be declared with [LET expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlet_expression_glosry.htm "Glossary Entry").

Besides the declarations shown here, the [formal parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of the [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") can be declared with the respective [modularization statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm). For those and also for field symbols, the date type can be either [complete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomplete_typing_glosry.htm "Glossary Entry") or [generic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneric_typing_glosry.htm "Glossary Entry") and the definition of that type is called [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry").

-   [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm)
-   [Inline Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm)
-   [Local Declarations in Constructor Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_expr_declarations.htm)
-   [Typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping.htm)

Hints

-   The declared entity is visible statically as soon as it is declared and is valid throughout its entire [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobj_context_glosry.htm "Glossary Entry").
-   Entities declared in [class pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_pool_glosry.htm "Glossary Entry") and [interface pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_pool_glosry.htm "Glossary Entry") are program local within these but can be made public for external usage. This involves [global classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_class_glosry.htm "Glossary Entry"), [global interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_interface_glosry.htm "Glossary Entry") and their [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry") components.
-   Local declarations always hide the more global declarations of the superordinate contexts.

Continue
[Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm)
[Inline Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm)
[Local Declarations in Constructor Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_expr_declarations.htm)
[Typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping.htm)