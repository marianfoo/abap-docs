# ABAP Keyword Documentation / ABAP Programming Guidelines / Architecture / User Interfaces

Included pages: 5


### abenuser_interfaces_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) → 

User Interfaces

The user interface is the interface between a (human) user and a machine, in this case between the user and the ABAP program that is running. In the ABAP environment, graphical user interfaces (GUIs) are used which can be operated using a keyboard, mouse, or other input devices. They are based on assorted interface technologies and use either SAP's own SAP GUI or are Web-based technologies that create HTML pages displayed using Web browsers.

-   [Selecting the User Interface Technology](javascript:call_link\('abeninterface_tech_guidl.htm'\) "Guideline")

-   [Encapsulating Classic User Interfaces](javascript:call_link\('abenencap_class_interf_guidl.htm'\) "Guideline")

-   [Lists](javascript:call_link\('abenlist_guidl.htm'\) "Guideline")

-   [Accessibility](javascript:call_link\('abenaccessibility_guidl.htm'\) "Guideline")

Continue
[Selecting the User Interface Technology](javascript:call_link\('abeninterface_tech_guidl.htm'\))
[Encapsulating Classic User Interfaces](javascript:call_link\('abenencap_class_interf_guidl.htm'\))
[Lists](javascript:call_link\('abenlist_guidl.htm'\))
[Accessibility](javascript:call_link\('abenaccessibility_guidl.htm'\))


### abeninterface_tech_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [User Interfaces](javascript:call_link\('abenuser_interfaces_guidl.htm'\)) → 

Selecting the User Interface Technology

Background

Various UI technologies can be used in the ABAP environment. We distinguish between classic technologies, which are based on the SAP GUI and are almost completely integrated into the ABAP language, and new Web-based technologies, which display the UI in a Web browser and are accessed through object-oriented interfaces in ABAP.

The classic SAP GUI technologies are:

-   Classic dynpros
    A classic dynpro is a component of an ABAP program. It is created using Screen Painter in ABAP Workbench and called using either a transaction code or the CALL SCREEN statement. Every time a dynpro is called, a dynpro sequence is started.

-   Selection screens
    A selection screen is a specific classic dynpro that is not created manually in Screen Painter. Instead, it is defined using the ABAP statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN. A selection screen is called either implicitly when executable programs are started or explicitly using the CALL SELECTION-SCREEN statement.

-   Classic lists
    Classic lists are used to output data in a structured and formatted manner. The formatted data is stored in a list buffer using specific ABAP statements (such as WRITE, FORMAT) and displayed on a special system dynpro. Classic lists are called either automatically (when an executable program is run) or with the LEAVE TO LIST-PROCESSING statement.

The new Web-based technologies are:

-   Business Server Pages
    Business Server Pages (BSP) are the counterpart to JavaServer Pages (JSP). BSPs are HTML pages with content that is partly dynamic. The dynamic content is created by server-side scripts that are written in ABAP. In AS ABAP, this type of script occurs as a generated ABAP Objects class. You create Business Server Pages using Web Application Builder in ABAP Workbench.

-   Web Dynpro ABAP
    Web Dynpro ABAP is a technology for creating platform-independent, Web-based interfaces. The architecture of Web Dynpro is based on the Model View Controller approach (MVC) for [SoC](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline"). The three components of the model view controller are the data model, which describes the application, the presentation view, and the program controller for responding to user actions. Web Dynpro applications are created using Web Dynpro Explorer in ABAP Workbench and appear in AS ABAP using generated ABAP Objects classes.

-   SAPUI5
    SAPUI5 is a tool set for developing user interfaces for Web applications in HTML5. SAPUI5 supports the Model View Controller (MVC) approach and based on the user interface elements delivered in JavaScript and CSS libraries. The data connection to the application server is established using the data formats [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry"), [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") or OData. User interfaces developed with SAPUI5 can be connected to SAP and non-SAP platforms. In particular, SAPUI5 user interfaces can be developed for ABAP applications of [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). The connection is established using [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") and [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry").

Rule

Use Web Dynpro ABAP or SAPUI5

Use Web Dynpro ABAP or SAPUI5 whenever possible to create the UIs of new application programs.

Details

Web Dynpro ABAP and SAPUI5 are SAP's standard UI technologies for developing modern Web applications in the ABAP environment. The MVC approach automatically ensures a separation of presentation logic and application logic, based on the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").

Compared to Web Dynpro, the BSP technology is much more fundamental. An MVC approach for the SoC is supported, but developers are still responsible for the implementation. BSPs can be regarded as the predecessor technology of Web Dynpro ABAP. The use of BSPs is now restricted to cases where a Web application is based on a single HTML page, for which scripting is required and the function cannot be implemented with Web Dynpro ABAP.

The classic SAP UI technology (classic dynpros based on the SAP GUI, including selection screens and lists) is no longer sufficient for modern and flexible business applications where the user interface must be accessible in a portal, for example. The MVC approach is not supported by frameworks or by any relevant tools.

Exception

The various UI technologies are not interoperable. In other words, it is usually not possible to switch parts of an application based on classical dynpros (including selection screens and classic lists) to Web Dynpro ABAP or SAPUI5. In addition, the commonly implemented dynpro programming model was previously not very oriented toward SoC. This makes it difficult or even impossible to implement a changeover for the purpose of further development. Consequently, in exceptional cases, classic dynpros and/or selection screens might be required if a new development needs to be included in an existing framework. For these exceptional cases, the following rules have been devised to ensure that these obsolete UI technologies are handled using a more modern approach.

Notes

-   In general, the UI technology of an application that is strictly modeled on the [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") can be replaced without any problems (see example below).

-   Web Dynpro ABAP and SAPUI5 are not part of the ABAP language. Specific guidelines regarding their use are not in the scope of these programming guidelines, which focus mainly on using the ABAP language to implement services.

Example

The transaction DEMO\_CR\_CAR\_RENTAL is called. Now two user interfaces can be selected for a car rental example:

-   A UI based on classic dynpros and selection screens. However, according to the above rule, using this UI technology in application programs is no longer recommended.

-   A modern UI based on Web Dynpro ABAP

Since the example application strictly separates all concerns, you can use it with different UIs without having to make adjustments to the application and persistence logic. The SoC is therefore a critical prerequisite for potential changeovers from classic dynpros to Web Dynpro ABAP.


### abenencap_class_interf_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [User Interfaces](javascript:call_link\('abenuser_interfaces_guidl.htm'\)) → 

Encapsulating Classic User Interfaces

Background

The [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") is one of the basic rules of these ABAP programming guidelines. This separation, which refers to a strict division of ABAP code into parts for presentation services, application services, and persistence services, is also technically possible for classic dynpro-based UI technologies. The MVC approach is not directly supported, but SoC can also be achieved through the consistent use of the available encapsulation technologies.

However, SoC was rarely implemented in classic dialog programming. Here, presentation logic, application logic, and persistence logic were often combined in a monolithic module pool.

Rule

Encapsulate classic dynpros and selection screens

Only create classic dynpros and selection screens in programs in a logical layer specifically provided for this purpose. You can use function groups as the program type.

Details

When using classic UI technologies, you need to separate the display logic from the application logic for the following reasons:

-   Reuse individual components

-   Automated program logic tests, irrespective of the UI

-   Change the UI technology

In addition, the communication between classic dynpros/selection screens and ABAP programs is implemented using global variables. This poses conceptual problems and cannot be combined with a modern, object-oriented approach for application programs.

Since class pools do not support classic dynpros and selection screens, you can only use function groups for encapsulation. In this role, a function group must be considered a global class. Here, the data of the global declaration part assumes the role of the private attributes, and the function modules assume the role of the public methods. The relevant procedure is demonstrated in DEMO\_CR\_CAR\_RENTAL\_SCREENS of package SABAP\_DEMOS\_CAR\_RENTAL\_DYNPRO. It applies to selection screens.

Besides UI elements, these function groups can only contain display logic in the form of local classes. The application logic communicates with the display logic using the function modules of this function group. You can still call the first dynpro of a dynpro sequence using a transaction code. This method is used in cases where the user starts the application.

The guidelines described in this book are also valid in function groups. It is especially important that the [dialog modules](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline") (PBO and PAI), which are called by the dynpro, or the [event blocks](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline") for selection screen processing do not contain any program logic. Instead they should directly delegate the processing to the relevant methods of the local classes. The same applies to the [function modules](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline") that act as the external interface. In addition, you must [restrict](javascript:call_link\('abenselect_table_type_guidl.htm'\) "Guideline") the scope of the function group global data to the minimum scope required for communicating with dynpros.

Exception

Following the above rule means you cannot use standard selection screens. Therefore, it is necessary to make an exception to this rule for executable programs that are executed during background processing. This is because the required parameter interface must be a standard selection screen defined directly in the program. An encapsulation in a function group is not possible here. However, in this case, the events of selection screen processing should only call one appropriate method of a local class within the executable program.

Bad Example

A classic dialog program - usually a single module pool - processes all the facets of an application.

Good Example

The following source code shows a part of a function group DEMO\_CR\_CAR\_RENTAL\_SCREENS with expanded include programs. This function group encapsulates the dynpro and selection screen for transaction DEMO\_CR\_CAR\_RENTAL, following the above rule. The connection to the application layer is established exclusively using the if\_demo\_cr\_car\_rentl\_service interface, which is also used in the Web Dynpro application of this transaction.

FUNCTION-POOL demo\_cr\_car\_rental\_screens.

\* Top Include

SELECTION-SCREEN BEGIN OF SCREEN 200 TITLE text-ccr.
PARAMETERS g\_name TYPE demo\_cr\_customer\_name.
SELECTION-SCREEN END OF SCREEN 200.

TABLES demo\_cr\_scustomer\_cntrl.

CONTROLS: customers TYPE TABLEVIEW USING SCREEN 0100,
          reservations TYPE TABLEVIEW USING SCREEN 0100.

DATA g\_ok\_code TYPE sy-ucomm.

DATA: g\_customers TYPE TABLE OF demo\_cr\_scustomer\_cntrl,
      g\_customer LIKE LINE OF g\_customers.

DATA: g\_reservations TYPE TABLE OF demo\_cr\_sreservation\_cntrl,
      g\_reservation LIKE LINE OF g\_reservations.

\* Local Class Declarations

CLASS screen\_handler DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA car\_rental\_service
       TYPE REF TO if\_demo\_cr\_car\_rentl\_service.
    CLASS-METHODS: class\_constructor,
                   status\_0100,
                   user\_command\_0100,
                   cancel.
  PRIVATE SECTION.
    CLASS-METHODS: customer\_search\_by\_id,
                   ...
ENDCLASS.

CLASS customer\_table DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: change\_tc\_attr,
                   mark.
ENDCLASS.
...
\* Function Module

FUNCTION demo\_cr\_call\_car\_rental\_screen.
  CALL SCREEN 100.
ENDFUNCTION.
\* PBO Modules

MODULE status\_0100 OUTPUT.
  screen\_handler=>status\_0100( ).
ENDMODULE.

MODULE customers\_change\_tc\_attr OUTPUT.
  customer\_table=>change\_tc\_attr( ).
ENDMODULE.
...
\* PAI Modules

MODULE cancel INPUT.
  screen\_handler=>cancel( ).
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  screen\_handler=>user\_command\_0100( ).
ENDMODULE.

MODULE customers\_mark INPUT.
  customer\_table=>mark( ).
ENDMODULE.
...
\* Local Class Implementations
...

Dynpro 100 is called in a function module but can also be linked to a transaction code. In the classic PBO and PAI modules, methods of local classes are called. However the implementation of these methods is not shown here. There is a class for general screen handling and a class for each table control. The application layer is accessed using the specified interface for implementations of the class.


### abenlist_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [User Interfaces](javascript:call_link\('abenuser_interfaces_guidl.htm'\)) → 

Lists

Background

A list is a medium used for the structured and formatted output of data. The following lists are available in ABAP:

-   Classic lists, which are written to a list buffer using ABAP statements and displayed on a special list dynpro.

-   Output of the SAP List Viewer (ALV), which is displayed in [GUI controls](javascript:call_link\('abengui_control_glosry.htm'\) "Glossary Entry") during the processing of classic dynpros. ALV lists are accessed using classes, such as CL\_SALV\_TABLE (non-hierarchically tabular lists), CL\_SALV\_HIERSEQ\_TABLE (hierarchically sequential lists), or CL\_SALV\_TREE (hierarchically tabular lists).

Classic lists are the only option to send ABAP data from ABAP programs directly to the SAP spool system as print lists. If SAP List Viewer is used, the lists that are displayed in the viewer are automatically converted to classic print lists during printing.

Rule

Use SAP List Viewer

Do not use classic lists. If dynpro-based, classic UI technologies are still used, SAP List Viewer (ALV) or other GUI control-based technologies should be used instead of classic lists in production programs.

Details

Using classic lists is no longer recommended for the following reasons:

-   The processing of lists is based on global data and events of the ABAP runtime environment.

-   The list buffer that is used for classic lists is bound to an executable program or a dynpro sequence and not to classes and objects.

-   It is almost impossible to separate presentation logic and application logic when writing to lists.

-   The UI of a classic list is not standardized and thus usually not accessible.

The concept of classic lists is therefore mostly incompatible with the ABAP Objects concept, and classic lists cannot be encapsulated in function groups as easily as classic dynpros and selection screens.

While the application developer must ensure [accessibility](javascript:call_link\('abenaccessibility_guidl.htm'\) "Guideline") in classic lists with a great deal of effort, the ALV lists automatically comply with the accessibility requirements because the ALV already provides the required services, such as user-specific settings.

Exception

Small helper programs that are not intended for live use in application systems can continue to use classic lists for system-related console output. The WRITE list statement here assumes the same role as System.out.println(...) in Java or printf in C.

In cases in which an ALV output seems to be overdimensioned, other methods are possible, such as Textedit Control or Browser Control (or its wrapping in dynamic documents) for the formatted output of non-tabular content. As before, accessibility must be guaranteed here.

Note

For simple console output, XML-based output streams can be used. An example of this is shown by the class CL\_DEMO\_OUTPUT\_STREAM. The class CL\_DEMO\_OUTPUT demonstrates possible applications of this class. It is used in programs in the [ABA Example Library](javascript:call_link\('abenabap_examples.htm'\)).

Bad Example

Executing the program DEMO\_CLASSICAL\_REPORTING produces a classic list output. However, according to the above rule, using classic lists in application programs is no longer recommended.

Good Example

Executing the program DEMO\_ALV\_REPORTING produces ALV lists with the same content and the same functions as the classic lists in the previous example. ALV lists replace classic lists in those cases in which classic dynpros are still used.


### abenaccessibility_guidl.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_guidl.htm'\)) →  [User Interfaces](javascript:call_link\('abenuser_interfaces_guidl.htm'\)) → 

Accessibility

Background

Accessibility is a [product standard](javascript:call_link\('abencorrectness_quality_guidl.htm'\) "Guideline") that ensures that information technology products can also be used by people with impairments. For user interfaces, for instance, this means meeting the needs of visually impaired or blind users in particular. These users usually need a screen reader program, which reads the content of the screen aloud.

Rule

Ensuring Accessibility

Make sure that your user interfaces are accessible, no matter what interface technology is used, so that they can be used by users with impairments.

Details

Primarily, user interfaces must be designed so that they can be processed by technologies such as screen readers or magnifiers. This means meeting the following requirements:

-   All input and output fields must have meaningful labels.

-   All table columns must have a header.

-   All icons must have a tooltip.

-   Information must not be expressed by color alone.

-   Input and output fields on the screen should be grouped as appropriate in frames, each with a meaningful title.

This is another reason to use the most up-to-date interface technologies, such as SAPUI5, Web Dynpro ABAP or ALV. These automatically only allow accessible interfaces, whereas application developers using older technologies such as classic screens or classic lists are themselves responsible for ensuring that the accessibility requirements are met. There are some checks in the [check tools](javascript:call_link\('abencheck_correctness_guidl.htm'\) "Guideline") for classic dynpros and selection screens that report violations of these rules (if they can be identified statically). However, for classic lists such checks are not possible until display.

Note

As regards using the browser control in classic dynpros, we refer here to the class CL\_HTMLTIDY. This class enables HTML files to be checked for formal correctness and accessibility. It is best to only display HTML files in a browser control if they have been checked by CL\_HTMLTIDY. The class CL\_ABAP\_BROWSER, which wraps the browser control for simple displays of HTML files, performs a check with CL\_HTMLTIDY by default.
