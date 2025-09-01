  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Tools%20in%20ABAP%20Release%207.0%2C%20EhP2%2C%20ABENNEWS-710-TOOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Tools in ABAP Release 7.0, EhP2

[1\. ABAP Editor](#!ABAP_MODIFICATION_1@1@)
[2\. Class Builder](#!ABAP_MODIFICATION_2@2@)
[3\. ABAP Debugger](#!ABAP_MODIFICATION_3@3@)
[4\. Coverage Analyzer](#!ABAP_MODIFICATION_4@4@)
[5\. ABAP Unit](#!ABAP_MODIFICATION_5@5@)
[6\. Runtime Analysis](#!ABAP_MODIFICATION_6@6@)
[7\. ABAP Test Cockpit](#!ABAP_MODIFICATION_7@7@)
[8\. Checkpoint Groups](#!ABAP_MODIFICATION_8@8@)

Modification 1   

ABAP Editor

Code Completion has been added to the new ABAP front-end editor. This tool proposes appropriate ABAP words and operands for the current code location. By default, Code Completion is called using Ctrl+Space. The following units can be completed:

-   Data objects including structures and components
-   Data types and classes
-   Components of classes
-   Function modules
-   Subroutines
-   Formal parameters
-   Database tables
-   ABAP words

The proposals can be accepted as they are or as patterns with prefilled parameters.

Modification 2   

Class Builder

The <ZK>Source Code-Based Editor</> setting is used to expand the internal include programs of a class pool. This displays the entire source code of a global class like a program in ABAP Editor and it can then be edited. When saved, the modified source code is then split among the associated include programs.

Modification 3   

ABAP Debugger

The following functions have been added to the two-process debugger:

-   Variable display:
    
    A new tab page, Auto, displays the last return values of methods.
    
    Long data objects can now be modified in the detail view.
    
-   Table tool:
    
    Support for secondary keys (the key used can be toggled in the debugger).
    
    Tables can be filled with data that was previously downloaded onto the presentation server.
    
    Substructures of structured line types can be expanded in a line.
    
    Columns can be hidden and made visible again.
    
    Display settings are retained for specific tables.
    
-   Breakpoint tool:
    
    Special breakpoints for Web Dynpro ABAP (specification of Web Dynpro component, Web Dynpro controller, or a Web Dynpro method).
    
    Special breakpoints for Simple Transformations (debugging of Simple Transformations).
    
    Special breakpoints for stack changes (breakpoint when switching program or procedure).
    
    Special breakpoint for imprecise Decfloat calculation (stops if an imprecise statement or calculation with decimal floating point numbers takes place).
    
-   Dynpro tool:
    
    New tool for analyzing screens (control, properties, layout).
    
-   ST debugging:
    
    New tool for debugging Simple Transformations (step-by-step execution, variables display, breakpoints).
    
-   Debugger scripting:
    
    ABAP debugger scripting can be used to analyze the current ABAP context.
    
    Called using a breakpoint or an automated single step.
    
    The context of the debuggee can be stopped, traced, or changed within a script.
    An integrated script tool scripts to be written, saved, loaded, and executed.
    
    Transaction SAS allows the independent editing of debugger scripts.
    
-   Statement debugging:
    
    Multiple statements in one line can be debugged step by step.
    
    Logical expressions can also be debugged step by step.
    
-   Layer debugging:
    
    The user can define the software layer (package, program, procedure, or interface) that should be debugged.
    
    A layer can be executed as a single step in debugging.
    
-   Stack tool:
    
    New setting for displaying the call stack of the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a caller
    
-   Exception tool:
    
    New tool for displaying and analyzing the last and previous class-based exceptions.
    
-   Console tool:
    
    This new tool displays the growing data of serializations from ABAP to XML for CALL TRANSFORMATION and for classic list output.
    
-   ABAP Enhancement Framework:
    
    Visualization of enhancements in the stack.
    
    Possibility of skipping or executing enhancement implementations.
    
-   ABAP byte code:
    
    In the ABAP byte code or ABAP byte code (debug macro) context menus, it is possible to select what a replacement for a proper macro debugging run can depict.
    
-   Functions taken from the old debugger:
    
    Displays the classic list currently being created in the [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") of the debuggee.
    
    Possibility of restarting the entire application.
    
    Settings (block tRFC sending, ESI debugging, shared objects: debug automatic area build, always create exception object, Control Framework: automation controller always processes requests synchronously, check sorting before READ BINARY SEARCH).
    

Modification 4   

Coverage Analyzer

Coverage Analyzer has been modified to include the following:

-   Code coverage is now measured on the statement level.
-   The coverage of individual conditions of logical expressions is measured.
-   The coverage of empty branches is measured.
-   The coverage of the executed and non-executed statement blocks in control structures is measured (branch coverage).

Code coverage is visualized in different colors in the new ABAP front-end editor. To measure the coverage of test runs, Coverage Analyzer has been integrated into ABAP Unit.

Modification 5   

ABAP Unit

In ABAP release 7.0, EhP2, the additions introduced for the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_testing.htm), namely RISK LEVEL and DURATION, have replaced the pseudo comments introduced in ABAP release 7.0, namely "#AU Risk\_Level ... and "#AU Duration ..., used for defining the test properties of [test classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_class_glosry.htm "Glossary Entry").

An ABAP Unit Browser integrated into Object Navigator in ABAP Workbench allows:

-   A structured overview of existing unit tests to be displayed.
-   Multiple test runs to be started at the same time.
-   Unit tests to be organized in favorites.

For the latter item, test coverage can be measured and displayed using Coverage Analyzer.

Class CL\_ABAP\_UNIT\_ASSERT replaces class CL\_AUNIT\_ASSERT. New methods are now assigned to the new class only. Existing unit tests do not have to be converted to the new class. It is recommended, however, that the new class is used only in new tests.

Modification 6   

Runtime Analysis

The runtime analysis tool has been switched to the new transaction SAT (the previous transactions were SE30 and ATRA). The new runtime analysis tool

-   has a new user interface for analyzing measurements. Like ABAP Debugger, it consists of adjustable desktops where various tools can be organized.
-   contains additional and more flexible analysis tools than the previous version.
-   saves the measurement data to the database, which makes it independent of the operating system of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the AS instance.
-   enables the cross-system comparison of measurement data.

Modification 7   

ABAP Test Cockpit

ABAP Test Cockpit (ATC) is a framework that is integrated into ABAP Workbench to execute various tests for development objects and to show the results of these. The following are some of the tests that are currently integrated:

-   Extended program checks
-   Performance tests
-   Unit tests
-   Usability tests
-   Package checks

The external release takes place in support package 12.

Modification 8   

Checkpoint Groups

A time limit now applies to activation settings for [checkpoint groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry"). When an activation setting is saved in transaction SAAB, either a validity period (valid for the current day or week) or a validity end date must be specified. The default value (valid for the current day) is generally suitable for most applications.