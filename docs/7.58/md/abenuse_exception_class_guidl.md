  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Error Handling](javascript:call_link\('abenerror_handling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20Exception%20Classes%2C%20ABENUSE_EXCEPTION_CLASS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using Exception Classes

Background   

The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You can divide an exception class into multiple subexceptions by creating multiple exception texts. Subclasses of exception classes can be used to make the information even more specific.

Rule   

Only use suitable exception classes

When describing an error situation, only use exception classes with the correct category and name, the appropriate attributes and texts, and which contain the correct documentation. Do not reuse inappropriate exception classes.

Details   

Reusing existing exception classes with the wrong content removes all benefits of freely definable exception classes. The new exception object cannot describe the exception situation adequately. It also makes it very difficult to maintain and analyze the code. In particular, you run a great risk of handling the exception incorrectly. This is because a caller layer higher up in the hierarchy never expects the exceptions it handles to be raised by a situation with the wrong semantics.

The following procedure is recommended for raising correct exceptions:

1.  Search for an existing exception class that is released for use in the current concept (and as part of the package concept) and which matches that error situation exactly.
2.  Make an existing, almost ideal exception class more specific by passing on and/or adding new exception texts.
3.  Create an new ideal exception class, possibly as a part of a predefined inheritance hierarchy.

In doing so, it must be ensured that an appropriate [exception category](javascript:call_link\('abenexception_category_guidl.htm'\) "Guideline") is used.

Bad Example

The following source code shows the incorrect use of the system class cx\_sy\_arithmetic\_overflow (which exists in every system) for an application-specific exception situation. This system exception should usually only be raised by the ABAP runtime framework when an arithmetic calculation takes place.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_sy\_arithmetic\_overflow.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows how an application-specific exception class is used that has been created especially for the situation and whose name reflects the topic.

CLASS cx\_warehouse\_out\_of\_capacity DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING cx\_warehouse\_out\_of\_capacity.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_warehouse\_out\_of\_capacity.
    ...
  ENDMETHOD.
ENDCLASS.