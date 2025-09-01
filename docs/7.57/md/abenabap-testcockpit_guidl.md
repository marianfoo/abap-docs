  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [ABAP-Specific Rules](javascript:call_link\('abenabap_specific_rules_gdl.htm'\)) →  [Checks for Correctness](javascript:call_link\('abencheck_correctness_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Test Cockpit, ABENABAP-TESTCOCKPIT_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP Test Cockpit

Background   

ABAP Test Cockpit (ATC) is a framework that is integrated into ABAP Workbench and the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"); it simplifies considerably the handling of the tests required during development. ATC makes it possible to execute and display results for various tests on development objects, for example:

-   Extended program checks
-   Static performance tests
-   Unit tests with ABAP Unit
-   Static usability tests
-   Package checks
-   Security checks

Whereas Code Inspector is only integrated into the [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry") by way of the [standard check](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline") and can otherwise only be used by calling a separate transaction, ATC is completely integrated into Object Navigator and Transport Organizer, and is available there for tests during development. ATC allows quality managers to perform mass tests. In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), some tests are provided only from ATC.

Rule   

Configure and use ABAP Test Cockpit correctly

If ABAP Test Cockpit is available in your system, make sure that an ATC run is performed on all involved development objects and that no messages are displayed before you release the objects for transport. The ATC check should be integrated directly into the transport release.

Details   

ATC is a tool that can be used both by SAP developers and as part of central quality assurance management. For example, if a developer checks all development objects of a package in the development system using the same ATC configuration used by a quality manager as part of a mass run in a consolidation system, all messages can be taken care of without having to wait for feedback from the quality manager.

If ATC is configured correctly, the above rule includes the previous rules for [syntax warnings](javascript:call_link\('abensyntax_check_guidl.htm'\) "Guideline"), [extended program checks](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline"), and [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline").

Hints

-   More specifically, the security checks in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") can be executed and managed from ATC, which makes their integration into the transport release possible.
-   Outside of SAP, ATC is available from the following releases:
    -   AS ABAP 7.0, EhP2, Support Package 12
    -   AS ABAP 7.0, EhP3, Support Package 05
    -   AS ABAP 7.3, EhP1, Support Package 05
    -   AS ABAP 7.4, Support Package 02