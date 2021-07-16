package com.hhu.service;

import com.hhu.dao.VehicleDao;
import com.hhu.model.VehicleBase;
import com.hhu.model.VehicleDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleDao vehicledao;

    @Override
    public List<String> getVehicleType() {
        return vehicledao.getVehicleType();
    }

    @Override
    public List<String> getVehicleModel() {
        return vehicledao.getVehicleModel();
    }

    @Override
    public List<String> getVehicleFactory() {
        return vehicledao.getVehicleFactory();
    }

    @Override
    public List<String> getVehicleSim() {
        return vehicledao.getVehicleSim();
    }

    @Override
    public List<VehicleBase> getVehicleBase(String type, String model, String id, String rackid, String vendors, String sim, String vehicleowners) {
        return vehicledao.getVehicleBase(type, model, id, rackid, vendors, sim, vehicleowners);
    }

    @Override
    public List<VehicleDetail> getVehicleDetail(String id) {
        List<VehicleDetail> ac = vehicledao.getVehicleDetail(id);
        System.out.println(Arrays.toString(ac.toArray()));
        return ac;
    }

    ;

}
