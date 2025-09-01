  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) → 

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

Hints

-   The [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") of dependency rules has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))