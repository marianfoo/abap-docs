# ABAP - Keyword Documentation / ABAP Programming Guidelines / General Rules

Included pages: 4


### abengeneral_rules_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) → 

General Rules

The following rules do not apply specifically to ABAP, even if they are demonstrated here in the context of ABAP programming, but apply equally well to all types of business application programming. Many of the rules described in this section are either derived from the general rules or support these rules.

-   [Separation of Concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm "Guideline")

-   [KISS Principle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkiss_principle_guidl.htm "Guideline")

-   [Correctness and Quality](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorrectness_quality_guidl.htm "Guideline")

Continue
[Separation of Concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm)
[KISS Principle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkiss_principle_guidl.htm)
[Correctness and Quality](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorrectness_quality_guidl.htm)


### abenseperation_concerns_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [General Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_rules_guidl.htm) → 

Separation of Concerns

Background

The term 'separation of concerns' (SoC) was coined in Edsger W. Dijkstra's article On the role of scientific thought from 1974:

"... But nothing is gained --on the contrary!-- by tackling these various aspects simultaneously. It is what I sometimes have called 'the separation of concerns', which, even if not perfectly possible, is yet the only available technique for effective ordering of one's thoughts, that I know of. This is what I mean by 'focusing one's attention upon some aspect': it does not mean ignoring the other aspects, it is just doing justice to the fact that from this aspect's point of view, the other is irrelevant." (Springer-Verlag, 1982)

Separation of concerns is a principle used in programming to separate an application into units, with minimal overlapping between the functions of the individual units. The separation of concerns is achieved using modularization, encapsulation and arrangement in software layers.

Although the classic three-layer architecture of the SAP system - now named SAP NetWeaver Application Server ABAP (AS ABAP) - is ideal for ABAP programming based on the SoC principle, this possibility was never explored. Application programs (in other words, dialog programs in module pools or reports in executable programs) were usually displayed as monolithic blocks, in which the system simultaneously reacted to user actions of the presentation layer, completed the application logic and executed accesses to data on the persistency layer. This type of programming is no longer relevant in today's programming world, where concepts like service-oriented architecture (SOA) set the trend.

Rule

Follow the SoC principle

Follow the separation of concerns principle. Model your applications strictly as service-oriented applications. It is especially important that you separate the logic of the application layer from the logic of the presentation layer, the persistency layer and the logic for communication with external systems. Encapsulate the repository objects of the individual concerns in separate packages.

Details

The SoC principle identifies the parts of an application with a specific purpose and encapsulates these parts in closed units. These units only communicate with each other using specified interfaces. Thanks to this principle, the software - which would have otherwise been overcomplicated - is divided up into manageable components. As a result, the software is:

-   more stable

-   easier to understand

-   easier to reuse

-   easier to transport

-   easier to maintain

-   easier to test

Regarding the last point, it would even be true to say that following the SoC principle is a prerequisite for executing isolated, automated [unit tests](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorrectness_quality_guidl.htm "Guideline").

Bad Example

The following graphic shows two examples of an ABAP application that do not follow the SoC principle.

![Figure](abdoc_soc_bad.jpg)

In fact, the two bad examples here are the programmer models for reporting and dialog programming that were propagated by SAP for a considerable length of time! To be more precise, the example is not bad due to the reporting or programming of transactions itself, but due to the way in which these applications are usually implemented. The mini report in the following source code is a typical example of how different concerns are mixed together in a single program unit. Both the data declarations and the implementation of the functions are mixed together. Access to persistent data, data processing, data presentation and the associated declarations all occur in one single unit.

REPORT z\_non\_soc\_report.

PARAMETERS p\_carrid TYPE spfli-carrid.

DATA: spfli\_tab TYPE STANDARD TABLE OF spfli
      alv     TYPE REF TO cl\_salv\_table,
      alv\_exc TYPE REF TO cx\_salv\_msg.

SELECT \*
       FROM spfli
       WHERE carrid = @p\_carrid
       INTO TABLE @spfli\_tab.

IF sy-subrc = 0.
  SORT spfli\_tab BY cityfrom cityto.
  TRY.
      cl\_salv\_table=>factory(
        IMPORTING r\_salv\_table = alv
        CHANGING t\_table = spfli\_tab ).
      alv->display( ).
    CATCH cx\_salv\_msg INTO alv\_exc.
      MESSAGE alv\_exc TYPE 'I' DISPLAY LIKE 'E'.
  ENDTRY.
ENDIF.

Of course, it would be too much to insist that concerns should be completely separated even in short programs like in the source code above. However, real applications are usually very long ABAP programs (executable programs, module pools), in which all concerns are handled at the same time. If modularization was performed, it was usually restricted to reusing functional units and was rarely focused on the actual available layers. In addition, large volumes of global data were usually created that were used in different procedures and layers. As a result, all the parts of the program were inherently dependent on each other and could not be tested individually. We are convinced that the quality of these programs can be improved not only by following naming conventions, but also by changing the paradigm for the procedure used for programming tasks.

The following source codes proves that you can implement the SoC principle using classic ABAP procedural methods (in this case, subroutines). This source code works in the same way as the source code above. However, all the concerns are implemented in separate procedures that are assigned to layers. As we have already mentioned, this type of implementation would be too much for a simple program. However, if you needed to test the concerns in the above source code individually and independently of each other by using unit tests, the only possibility would be to adapt the source code as shown below. The program of the following source code can now be easily assigned test methods in ABAP unit test classes, which test the individual procedures.

REPORT z\_soc\_report.

SELECTION-SCREEN BEGIN OF SCREEN 100.
PARAMETERS p\_carrid TYPE spfli-carrid.
SELECTION-SCREEN END OF SCREEN 100.

TYPES spfli\_tab TYPE STANDARD TABLE OF spfli.

DATA: carrid TYPE spfli-carrid,
      table  TYPE spfli\_tab,
      arc     TYPE sy-subrc.

START-OF-SELECTION.
  PERFORM get\_carrid CHANGING carrid.
  PERFORM get\_table  USING    carrid
                     CHANGING table
                              arc.

IF arc = 0
  PERFORM sort\_table    CHANGING table.
  PERFORM display\_table USING    table.
ENDIF.

\* Presentation layer

FORM get\_carrid
     CHANGING value(carrid) TYPE spfli-carrid.
  CALL SELECTION-SCREEN 100.
  IF sy-subrc = 0.
    carrid = p\_carrid.
  ENDIF.
ENDFORM.

FORM display\_table
     USING table TYPE spfli\_tab.
  DATA: alv     TYPE REF TO cl\_salv\_table,
        alv\_exc TYPE REF TO cx\_salv\_msg.
  TRY.
     cl\_salv\_table=>factory(
       IMPORTING r\_salv\_table = alv
       CHANGING t\_table = table ).
     alv->display( ).
   CATCH cx\_salv\_msg INTO alv\_exc.
     MESSAGE alv\_exc TYPE 'I' DISPLAY LIKE 'E'.
  ENDTRY.
ENDFORM.

\* Application layer

FORM sort\_table
     CHANGING table TYPE spfli\_tab.
     SORT table BY cityfrom cityto.
ENDFORM.

\* Persistency layer

FORM get\_table
     USING     carrid TYPE spfli-carrid
     CHANGING table   TYPE spfli\_tab
              arc     TYPE sy-subrc.
  SELECT \*
         FROM spfli
         WHERE carrid = @carrid
         INTO TABLE @table.
  arc = sy-subrc.
ENDFORM.

However, this separation of concerns using subroutines shown above does not create a good impression. The following source code shows how the separation of concerns should be implemented instead using methods in concern-specific classes.

Good Example

The following graphic shows how an ABAP application should look that follows the separation of concerns.

![Figure](abdoc_soc_good.jpg)

After the concerns have been identified, they are implemented in ABAP object classes. The concerns shown in the graphic are the main tasks that are usually performed in ABAP application programming:

-   Communication with a user interface (UI) using UI services

-   Actual application logic

-   Access to persistent data using persistency services

-   Communication with external systems using proxy services

These main rules can be subdivided further, which is often necessary.

The boxes for the individual concerns in the graphic represent packages. All the repository objects (classes, data types) belonging to a concern should be located in corresponding packages. The package concept (encapsulated packages) supports this separation of concerns. In encapsulated packages, repository objects in one package can only access the objects of another package using package interfaces, which is checked by the syntax check. A package can restrict the usability of its repository objects even more by using access control lists. Subdividing the separation of concerns in a package is a concept supported by subpackages.

For example, encapsulating all database tables of an application in a package for persistency services prevents any program, that does not belong to this package, from accessing these database tables. The reverse is also true. For example, programs in the persistency layer cannot communicate directly with components in the presentation layer, such as a Web Dynpro ABAP application. You should prepare the package encapsulation (by choosing Package Check as Server) in the package properties. These packages have package interfaces, A package check is performed during the extended program check.

The following source code shows how to adapt the separation of concerns from the above source code for classes local to the program.

REPORT z\_soc\_class\_report.
SELECTION-SCREEN BEGIN OF SCREEN 100.
PARAMETERS p\_carrid TYPE spfli-carrid.
SELECTION-SCREEN END OF SCREEN 100.

TYPES spfli\_tab TYPE STANDARD TABLE OF spfli.

CLASS presentation\_server DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      get\_carrid RETURNING VALUE(carrid) TYPE spfli-carrid,
      display\_table IMPORTING VALUE(table) TYPE spfli\_tab.
ENDCLASS.

CLASS presentation\_server IMPLEMENTATION.
  METHOD get\_carrid.
    CALL SELECTION-SCREEN 100.
    IF sy-subrc = 0.
      carrid = p\_carrid.
    ENDIF.
  ENDMETHOD.
  METHOD display\_table.
    DATA: alv     TYPE REF TO cl\_salv\_table,
          alv\_exc TYPE REF TO cx\_salv\_msg.
    TRY.
       cl\_salv\_table=>factory(
         IMPORTING r\_salv\_table = alv
         CHANGING t\_table = table ).
        alv->display( ).
      CATCH cx\_salv\_msg INTO alv\_exc.
        MESSAGE alv\_exc TYPE 'I' DISPLAY LIKE 'E'.
     ENDTRY.
   ENDMETHOD.
ENDCLASS.

CLASS application\_server DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
       sort\_table CHANGING table TYPE spfli\_tab.
    ENDCLASS.

CLASS application\_server IMPLEMENTATION.
  METHOD sort\_table.
    SORT table BY cityfrom cityto.
  ENDMETHOD.
ENDCLASS.

CLASS persistency\_server DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
       get\_table IMPORTING carrid TYPE spfli-carrid
                 EXPORTING table  TYPE spfli\_tab
                           arc     TYPE sy-subrc.
ENDCLASS.

CLASS persistency\_server IMPLEMENTATION.
  METHOD get\_table.
   SELECT \*
          FROM spfli
          WHERE carrid = @carrid
          INTO TABLE @table.
    arc = sy-subrc.
  ENDMETHOD.
ENDCLASS.

CLASS report DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.

CLASS report IMPLEMENTATION.
  METHOD main.
    DATA: carrid TYPE spfli-carrid,
          table  TYPE spfli\_tab,
          arc     TYPE sy-subrc.
    carrid = presentation\_server=>get\_carrid( ).
    persistency\_server=>get\_table( EXPORTING carrid = carrid
                                   IMPORTING table  = table
                                             arc     = arc ).
    IF arc = 0.
      application\_server=>sort\_table(
        CHANGING table = table ).
      presentation\_server=>display\_table( table ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

START-OF-SELECTION.
report=>main( ).

At first glance, the above source code appears to be very excessive compared to the first source code. But only on the first glance. A real application program usually only consists of 25 lines. The larger and more realistic the application program, the smaller the proportion of the overhead that is incurred by wrapping the concerns in classes. If the reuse options for [ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") are used appropriately, it is even possible to reduce the amount of source code.

In addition, the individual steps are now wrapped in classes, in other words, real program units (unlike in the second source code). In practice, wrapping is not performed in one single program, but in global classes that are assigned to different packages, depending on the layer. These packages are connected to each other using package interfaces. It is only by using these interfaces that you can achieve the other benefits of separating the concerns (in addition to the testing capability achieved in the second source code).


### abenkiss_principle_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [General Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_rules_guidl.htm) → 

KISS Principle

Background

The KISS principle says that you should always choose the simplest solution for a problem. KISS is an acronym and can have any of the following meanings (the list is not exhaustive):

-   Keep it simple, stupid.

-   Keep it small and simple.

-   Keep it sweet and simple.

-   Keep it simple and straightforward.

-   Keep it short and simple.

-   Keep it simple and smart.

-   Keep it strictly simple.

The basic statement of the KISS principle is similar to Occam’s razor, which says that in science the preferred theory is the one that makes fewest assumptions to explain observations (see Wikipedia entry on the KISS principle).

Rule

Follow the KISS principle

Follow the KISS principle, and limit the complexity of your programs as far as possible.

Details

The best solution to a problem is usually the one that is as simple, minimalist, and easy to understand as possible, while ensuring stability, understandability, and maintainability in addition to functional correctness.

There are plenty of bad examples of the KISS principle. Why is this?

-   Programs are too complex right from the start. This can be due to poor design or simply a rash, undisciplined programming style.

-   Programs are maintained for lengthy periods. Instead of creating new implementations for old and new functions together, new functions are simply added (usually using IF control structures) to old functions. Programs that were initially simple thus become ever more complex, although this is not justified by the complexity of the task at hand.

To develop according to the KISS principle, you should ensure right from the start that the complexity of the program remains manageable. Rules that support this approach relate to the [structure and style](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_style_guidl.htm "Guideline") of programs, in particular [comments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomments_guidl.htm "Guideline") and [complexity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomplexity_guidl.htm "Guideline").

Note

If existing programs do not follow the KISS principle, and these programs need to be further developed, we recommend refactoring as appropriate. Refactoring refers to the process of manually or automatically improving the structure of programs while retaining the observable program behavior. It improves legibility, understandability, maintainability, and extensibility, as well as considerably reducing the related effort for troubleshooting and functional enhancements (see Wikipedia entry on refactoring). The (incremental) refactoring of an existing program is not only useful for following the above rule, but also for all following rules.

The refactoring of existing code is supported by the required coverage by [unit tests](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorrectness_quality_guidl.htm "Guideline"). Comprehensive unit tests can ensure that a program behaves in the same way after the refactoring process.

Example

The figure below shows the structure of a method that does not follow the KISS principle. The method consists of approximately 160 statements and reaches a [nesting depth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennesting_depth_guidl.htm "Guideline") of 12 levels. The method, which is only illustrated schematically, is a real example from a live ABAP program, which reached the state shown on the left after continuous additional developments. The method had become so complex that it was practically impossible to make another necessary change, and the developer was forced to refactor in line with the KISS principle.

![Figure](abdoc_kiss.jpg)

The result is illustrated on the right of the figure. By splitting the method M into three methods, each with less than 100 statements and a maximum nesting depth of 5 levels, manageable modularization units were created, which follow the rules for [complexity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomplexity_guidl.htm "Guideline"), and allow the required modification to be made. Ideally, however, the state shown on the left side of the figure should never occur.


### abencorrectness_quality_guidl.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [General Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_rules_guidl.htm) → 

Correctness and Quality

Background

Most organizations that develop professional software have product standards that must be adhered to. These product standards define what is meant by correctness and quality of a program. SAP has many such standards, which development departments have to comply with. The current product standards that are most important to developers are listed below:

-   Accessibility
    In the information technology environment, the term accessibility relates to the requirement that anyone, including and especially those with impairments, can access and use information technology products. To make products such as software or websites accessible to all consumers, they must be created and designed so that they can still be used if users have a particular impairment (for example, visual impairment, color blindness) and must be compatible with technologies such as screen readers and screen magnifiers.

-   Documentation
    As a rule, a product standard for documentation defines which documents have to be shipped to the consumer with the product and ensures that the documentation supplied is consistent, correct, and up to date across all product areas.

-   Functional Correctness
    The functional correctness of software is generally seen as its most important quality. Software that is not functionally correct is usually unusable. As a rule, a product standard for functional correctness requires software to be error-free, and defines the stability of interfaces and program behavior during upgrades. To reach these goals, thorough testing of the software may be made compulsory.

-   Globalization
    If software is to be used worldwide, a product standard for globalization is usually necessary. This covers the aspects of internationalization and localization.

-   Internationalization
    Internationalization comprises the technical aspects of globalization such as Unicode compatibility, text processing, screen display, printing, data exchange, time zones, translatability, and so on, and thus sets out the technical prerequisites for localization. The translation of user interfaces and other texts is also, of course, an important aspect of internationalization.

-   Localization
    Localization is necessary if software for global use has to be adapted to local (usually country-specific) conditions, such as legal requirements or particular business procedures.

-   Performance
    Even if a program is functionally correct, it is of little or no use to a user if it cannot be executed in a reasonable time. A performance product standard ensures that this aspect is not neglected. It can include, for example, rules for efficient database access and scalability of application logic.

-   Security
    Where security is critical to software, and this is generally the case for any type of business software, a product standard for security sets out all security-relevant aspects of a product, by pointing out any potential security gaps or legal requirements, for example, and also contains instructions for meeting the standard.

-   Usability
    The term usability refers to the adaptation of user interfaces to the requirements of human end users and their tasks. A usability product standard should ensure that end users can perform their tasks efficiently and effectively. Key aspects of usability include consistency of user interfaces, ease of use, intuitive task-friendly and role-friendly interfaces, individual adaptability, error tolerance, and so on.

Although these standards are, in part, legal requirements, they essentially arise from the fundamental aim to guarantee the correctness and quality of the software that is shipped to consumers. Programming guidelines are very important in this respect. Many of the guidelines listed here support, directly or indirectly, one of the standards mentioned or are derived from them. They support and ensure compliance with such standards, resulting in correct, high-quality programs. The programming guidelines themselves could even be said to be on a par with binding product standards.

However, since not all possible product standards can be covered by the programming guidelines, for example all rules of a performance or security standard, we set out the following basic rule.

Rule

Comply with or check compliance with existing product standards

Adhere to the product standards that exist in your organization, and ensure the correctness and quality of your programs by testing them during development and after completion with all the test tools at your disposal.

Details

It is obvious that you must comply with product standards; this needs no further explanation. However, it is often forgotten that the static and dynamic analysis tools that are available in the ABAP environment can provide invaluable help for compliance with important product standards, particularly standards for functional correctness and performance. Therefore, as part of this basic rule we recommend that you use all available tools that help to ensure the correctness and quality of ABAP programs.

-   Perform the [extended program check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_guidl.htm "Guideline") (transaction SLIN) on a regular basis and correct all messages.

-   Use the [Code Inspector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencode_inspector_guidl.htm "Guideline") tool (transaction SCI) on a regular basis using the standard check variant, and correct all messages.

-   Check the usability and accessibility of your interface elements by using the appropriate tools (integrated into the workbench tools and [ABAP Test Cockpit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap-testcockpit_guidl.htm "Guideline")).

-   Cover all functions of your procedural units by using units tests with ABAP Unit (integrated into ABAP Workbench, Code Inspector, and ABAP Test Cockpit).

-   Cover all functions of your applications by using scenario tests with eCATT (transaction SECATT).

-   Check the memory consumption of your programs by using ABAP Memory Inspector (transaction S\_MEMORY\_INSPECTOR and the memory analysis function integrated into ABAP Debugger).

-   Check the runtime behavior and the performance. In SAP GUI use the ABAP runtime analysis (transaction SAT) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry") use the ABAP Profiler.

-   Check the test coverage by using Coverage Analyzer (transaction SCOV and integrated into ABAP Unit Browser of ABAP Workbench).

-   Follow the [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_security.htm) to protect your programs and data from attacks from outside.

-   Document your programs and services using all available means: Starting with [comments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomments_guidl.htm "Guideline"), this ranges from simple data element documentation for context-sensitive input help, to class and method documentation for documenting APIs, to explanations of concepts and tutorials in other repositories such as SAP Knowledge Warehouse, or on the Internet, for example in the SAP Developer Community (SCN, http://scn.sap.com).

ABAP Test Cockpit ([ATC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencts_glosry.htm "Glossary Entry")) integrated into ABAP Workbench and the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencts_glosry.htm "Glossary Entry") supports the execution and evaluation of the most important tests. Some of these tests also check compliance with some of the rules of the ABAP programming guidelines discussed later.

Note

Where in doubt, product standards take precedence over the guidelines and recommendations of this documentation. If, for example, performance or security aspects prohibit any of the programming practices presented here, compliance with the standard takes priority.

Good Example

Executing unit tests for classes of the package SABAP\_DEMOS\_CAR\_RENTAL\_APPL and displaying the results in ABAP Unit Browser of Object Navigator gives a test coverage of 100%. This package is shipped as a subpackage for the application layer of a small example application, which, in addition to unit tests, also demonstrates strict adherence to the [separation of concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm "Guideline").
