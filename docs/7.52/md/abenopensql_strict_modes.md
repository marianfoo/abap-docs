---
title: "Open SQL - Release-Dependent Syntax Check Modes"
description: |
  In Release 7.40, SP02, a new SQL parser for Open SQL was introduced, used for both statically specified Open SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement SELECT(http
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm"
abapFile: "abenopensql_strict_modes.htm"
keywords: ["select", "do", "if", "try", "data", "abenopensql", "strict", "modes"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) → 

Open SQL - Release-Dependent Syntax Check Modes

In Release 7.40, SP02, a new SQL parser for Open SQL was introduced, used for both statically specified Open SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and, from Release 7.40, SP05, for all Open SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740-open_sql.htm) and [7.40 SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp05-open_sql.htm).

Alongside these general revisions (which apply to all Open SQL statements), Release 7.40, SP05 also introduced syntax check modes known as strict modes, which check Open SQL statements even more strictly if they use attributes introduced in the release in question.

-   [Strict Mode in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm)

-   [Strict Mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm)

-   [Strict Mode in Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm)

-   [Strict Mode in Release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_751.htm)

-   [Strict Mode in Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm)

Notes

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an attribute is used that was not present in previous releases.

-   The strict modes in later releases contain the rules from all preceding releases. More specifically, from Release 7.40 SP05 all strict modes require programs with ABAP language version [standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_program_glosry.htm "Glossary Entry"), in which the program attribute [fixed point arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is activated.

-   The following reasons apply for release-dependent strict modes of the syntax check:

-   First, rules such as the use of comma-separated lists or the introduction of host variables with @ are a precondition for using new syntax constructs that cannot be parsed otherwise.

-   Furthermore, developers should be encouraged to always use the desired syntax. For these reasons, an Open SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used is not dependent upon it.

Continue
[Strict Mode in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm)
[Strict Mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm)
[Strict Mode in Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm)
[Strict Mode in Release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_751.htm)
[Strict Mode in Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm)