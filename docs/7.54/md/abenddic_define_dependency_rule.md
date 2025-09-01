  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Dependency Rules in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_dependency_rules.htm) → 

Dictionary DDL for defining dependency rules

An ABAP Dictionary [dependency rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendependency_rule_glosry.htm "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendrul_source_code_glosry.htm "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define precisely one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_drul.htm)

Notes

-   The [DRUL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendrul_source_code_glosry.htm "Glossary Entry") of dependency rules has its own editor in [ADT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_drul.htm)