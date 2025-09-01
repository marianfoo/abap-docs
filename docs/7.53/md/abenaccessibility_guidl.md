  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [User Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_interfaces_guidl.htm) → 

Accessibility

Background

Accessibility is a [product standard](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorrectness_quality_guidl.htm "Guideline") that ensures that information technology products can also be used by people with impairments. For user interfaces, for instance, this means meeting the needs of visually impaired or blind users in particular. These users usually need a screen reader program, which reads the content of the screen aloud.

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

This is another reason to use the most up-to-date interface technologies, such as SAPUI5, Web Dynpro ABAP or ALV. These automatically only allow accessible interfaces, whereas application developers using older technologies such as classic screens or classic lists are themselves responsible for ensuring that the accessibility requirements are met. There are some checks in the [check tools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_correctness_guidl.htm "Guideline") for classic dynpros and selection screens that report violations of these rules (if they can be identified statically). However, for classic lists such checks are not possible until display.

Note

As regards using the browser control in classic dynpros, we refer here to the class CL\_HTMLTIDY. This class enables HTML files to be checked for formal correctness and accessibility. It is best to only display HTML files in a browser control if they have been checked by CL\_HTMLTIDY. The class CL\_ABAP\_BROWSER, which wraps the browser control for simple displays of HTML files, performs a check with CL\_HTMLTIDY by default.