  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) → 

ABAP SQL - Release-Dependent Syntax Check Modes

In Release 7.40, SP02, a new SQL parser for ABAP SQL was introduced that is used for both statically specified ABAP SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) and, from Release 7.40, SP05, for all ABAP SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740-abap_sql.htm) and [7.40 SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp05-abap_sql.htm).

Alongside these general revisions, which apply to all ABAP SQL statements, Release 7.40, SP05 also introduced syntax check modes known as strict modes, which check ABAP SQL statements even more strictly if they use features introduced in the corresponding release.

-   [ABAP SQL - Strict Mode in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm)
-   [ABAP SQL - Strict Mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm)
-   [ABAP SQL - Strict Mode in Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm)
-   [ABAP SQL - Strict Mode in Release 7.51](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_751.htm)
-   [ABAP SQL - Strict Mode in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_752.htm)
-   [ABAP SQL - Strict Mode in Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_753.htm)
-   [ABAP SQL - Strict Mode in Release 7.54](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_754.htm)
-   [ABAP SQL - Strict Mode in Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_755.htm)
-   [ABAP SQL - Strict Mode in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_756.htm)

Hints

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an feature is used that was not present in previous releases.
-   The strict modes in later releases contain the rules from all preceding releases. More specifically, all strict modes demand, from Release 7.40, SP05, programs in which the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated.
-   The following reasons apply for release-dependent strict modes of the syntax check:
    -   First, rules such as the use of comma-separated lists or the introduction of host variables with @ are a prerequisite for using new syntax constructs that cannot be parsed otherwise.
    -   On the other hand, developers should be encouraged to always use the desired syntax. For these reasons, an ABAP SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used would not depend on it.

Continue
[ABAP SQL - Strict Mode in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm)
[ABAP SQL - Strict Mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm)
[ABAP SQL - Strict Mode in Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm)
[ABAP SQL - Strict Mode in Release 7.51](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_751.htm)
[ABAP SQL - Strict Mode in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_752.htm)
[ABAP SQL - Strict Mode in Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_753.htm)
[ABAP SQL - Strict Mode in Release 7.54](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_754.htm)
[ABAP SQL - Strict Mode in Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_755.htm)
[ABAP SQL - Strict Mode in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_756.htm)