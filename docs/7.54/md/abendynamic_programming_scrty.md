  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) → 

Security Risks Caused by Input from Outside

Most security issues in ABAP programs are caused by because input injected into a program from outside, that is

-   from a user interface

-   from a parameter interface

-   from a persistent repository,

is used wrongly or carelessly. More specifically, security risks arise here whenever full statements, parts of statements, or objects accessed in statements are specified dynamically and hence are not subject to static checks. Dynamically specified items of this nature occur, for example, in the following cases:

-   Dynamically specified objects are anchored in the syntax of a statement in a natural way. For example, file names specified dynamically using a variable in a statement from the [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry") are the norm, and not exceptions .

-   Frameworks are fully dynamic (for example [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry")) if they use dynamic SQL statements only.

-   Here, information is specified dynamically to make the programming of functions more compact than if they were programmed statically (perhaps due to a large number of case distinctions).

Two main cases must be distinguished here:

-   The dynamic information is created in full in the same program and does not contain any parts that originate outside the program.

-   Some or all of the dynamically created information originates outside the program, meaning that it is taking from a UI, a parameter interface, or a repository.

If assuming that the developer of a program does so without malicious intent, dynamically specified objects are uncritical in the former case.

The latter case, on the other hand, is critical. If external input is specified dynamically in an ABAP statement without being checked or masked, damage can be incurred (whether unintentional or malicious). The damage can range from exceptions being raised, the absence of system resources (Denial of Service attacks), to the manipulation of persistent data.

The following sections provide examples of the most significant security risks when input from outside is used in statements:

-   [SQL injections](javascript:call_link\('abensql_injections_scrty.htm'\))

-   [Dynamic calls](javascript:call_link\('abendyn_call_scrty.htm'\))

-   [Directory traversal](javascript:call_link\('abendyn_file_scrty.htm'\))

-   [System command injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\))

-   [Cross site scripting](javascript:call_link\('abenxss_scrty.htm'\))

-   [ABAP command injections](javascript:call_link\('abengeneric_prog_scrty.htm'\))

The global principle in these sections of always checking and/or masking external input also applies in all cases not listed separately here, such as using a dynamic [WHERE](javascript:call_link\('abaploop_at_itab_cond.htm'\)) condition when accessing internal tables.

Note

Back doors, implemented by malicious developers using dynamically specified information, are not discussed here. These cannot be checked statically, since they do not originate outside the program, and are not usually classified as dangerous by static checks. The two-man rule code inspections are probably the only solution here. See also [Obscuring ABAP Source Code](javascript:call_link\('abenobscure_code_scrty.htm'\)).

Continue
[SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\))
[Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\))
[Directory Traversal](javascript:call_link\('abendyn_file_scrty.htm'\))
[System Command Injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\))
[Cross Site Scripting](javascript:call_link\('abenxss_scrty.htm'\))
[ABAP Command Injections](javascript:call_link\('abengeneric_prog_scrty.htm'\))