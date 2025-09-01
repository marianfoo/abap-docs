---
title: "Security Risks Caused by Input from Outside"
description: |
  Most security issues in ABAP programs are caused by because input injected into a program from outside, that is -   from a user interface -   from a parameter interface -   from a persistent repository, is used wrongly or carelessly. More specifically, security risks arise here whenever full stateme
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynamic_programming_scrty.htm"
abapFile: "abendynamic_programming_scrty.htm"
keywords: ["loop", "do", "if", "case", "try", "class", "data", "internal-table", "abendynamic", "programming", "scrty"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm) → 

Security Risks Caused by Input from Outside

Most security issues in ABAP programs are caused by because input injected into a program from outside, that is

-   from a user interface
-   from a parameter interface
-   from a persistent repository,

is used wrongly or carelessly. More specifically, security risks arise here whenever full statements, parts of statements, or objects accessed in statements are specified dynamically and hence are not subject to static checks. Dynamically specified items of this nature occur, for example, in the following cases:

-   Dynamically specified objects are anchored in the syntax of a statement in a natural way. For example, file names specified dynamically using a variable in a statement from the [ABAP file interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_glosry.htm "Glossary Entry") are the norm, and not exceptions .
-   Frameworks are fully dynamic (for example [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_glosry.htm "Glossary Entry")) if they use dynamic SQL statements only.
-   Here, information is specified dynamically to make the programming of functions more compact than if they were programmed statically (perhaps due to a large number of case distinctions).

Two main cases must be distinguished here:

-   The dynamic information is created in full in the same program and does not contain any parts that originate outside the program.
-   Some or all of the dynamically created information originates outside the program, meaning that it is taking from a UI, a parameter interface, or a repository.

If assuming that the developer of a program does so without malicious intent, dynamically specified objects are uncritical in the former case.

The latter case, on the other hand, is critical. If external input is specified dynamically in an ABAP statement without being checked or escaped, damage can be incurred (whether unintentional or malicious). The damage can range from exceptions being raised, the absence of system resources (Denial of Service attacks), to the manipulation of persistent data.

The following sections provide examples of the most significant security risks when input from outside is used in statements:

-   [SQL Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_injections_scrty.htm)
-   [Dynamic Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_call_scrty.htm)
-   [Directory Traversal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_file_scrty.htm)
-   [System Command Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensys_comm_injections_scrty.htm)
-   [Cross Site Scripting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxss_scrty.htm)
-   [ABAP Command Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_prog_scrty.htm)

The global principle in these sections of always checking and/or escaping external input also applies in all cases not listed separately here, such as using a dynamic [WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm) condition when accessing internal tables.

Hint

Back doors, implemented by malicious developers using dynamically specified information, are not discussed here. These cannot be checked statically, since they do not originate outside the program, and are not usually classified as dangerous by static checks. The two-man rule code inspections are probably the only solution here. See also [Obscuring ABAP Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobscure_code_scrty.htm).

Continue
[SQL Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_injections_scrty.htm)
[Dynamic Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_call_scrty.htm)
[Directory Traversal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_file_scrty.htm)
[System Command Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensys_comm_injections_scrty.htm)
[Cross Site Scripting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxss_scrty.htm)
[ABAP Command Injections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_prog_scrty.htm)