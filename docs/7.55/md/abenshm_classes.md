  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects - Classes and Interfaces

The hierarchy of global classes that are involved when working with shared objects is as follows:

[CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\))
  |
  |--[CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\))
  |    |
  |    |--[Area Classes](javascript:call_link\('abenshm_area_class.htm'\))
  |
  |--[CL\_IMODE\_AREA](javascript:call_link\('abenshm_cl_imode_area.htm'\))

The meaning of the three predefined system classes:

-   [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) is the superclass of all area classes.

-   [CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\)) is the superclass of all self-defined area classes.

-   [CL\_IMODE\_AREA](javascript:call_link\('abenshm_cl_imode_area.htm'\)) is a predefined area class for the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

There is also a system interface that must be implemented by the class for the optional area constructor:

[IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\))
  |
  |--[Area Constructor Class](javascript:call_link\('abenshm_area_constructor_class.htm'\))

Continue
[Shared Objects - CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\))
[Shared Objects - IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\))